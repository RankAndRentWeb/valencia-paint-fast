#!/usr/bin/env node
/**
 * QA Crawler for valencia-paint-fast
 * Verifies SEO, design consistency, and basic functionality
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'http://localhost:4322';

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class QACrawler {
  constructor() {
    this.results = [];
    this.errors = [];
    this.warnings = [];
    this.allRoutes = new Set();
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  /**
   * Discover routes from src/pages directory
   */
  async discoverFileRoutes() {
    const pagesDir = path.join(__dirname, '..', 'src', 'pages');
    const routes = new Set();

    const walkDir = (dir, basePath = '') => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath, path.join(basePath, file));
        } else if (file.endsWith('.astro')) {
          let route = path.join(basePath, file.replace('.astro', '')).replace(/\\/g, '/');
          
          // Handle index files
          if (route.endsWith('/index')) {
            route = route.replace('/index', '') || '/';
          }
          
          // Handle root index
          if (route === 'index') {
            route = '/';
          }
          
          // Skip dynamic routes for now (contain [])
          if (!route.includes('[')) {
            // Ensure trailing slash except for root
            if (route !== '/' && !route.endsWith('/')) {
              route += '/';
            }
            routes.add(route);
          }
        }
      }
    };

    walkDir(pagesDir);
    return routes;
  }

  /**
   * Extract navigation links from homepage
   */
  async discoverNavLinks() {
    try {
      const response = await fetch(`${BASE_URL}/`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;
      
      const links = new Set();
      
      // Extract header navigation links
      const navLinks = document.querySelectorAll('header a, nav a, footer a');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          // Clean up the href
          let cleanHref = href.split('#')[0].split('?')[0];
          if (cleanHref !== '/' && !cleanHref.endsWith('/')) {
            cleanHref += '/';
          }
          links.add(cleanHref);
        }
      });

      return links;
    } catch (error) {
      this.errors.push(`Failed to discover nav links: ${error.message}`);
      return new Set();
    }
  }

  /**
   * Fetch and analyze a single route
   */
  async analyzeRoute(route) {
    const result = {
      route,
      status: null,
      title: null,
      description: null,
      canonical: null,
      lang: null,
      h1Count: 0,
      ogTitle: null,
      ogDescription: null,
      twitterCard: null,
      footerVisible: false,
      images: [],
      issues: []
    };

    try {
      this.log(`Analyzing: ${colors.blue}${route}${colors.reset}`);
      
      // Ensure route starts with /
      const cleanRoute = route.startsWith('/') ? route : `/${route}`;
      const response = await fetch(`${BASE_URL}${cleanRoute}`);
      result.status = response.status;

      if (!response.ok) {
        result.issues.push(`HTTP ${response.status}`);
        return result;
      }

      const html = await response.text();
      const dom = new JSDOM(html);
      const document = dom.window.document;

      // Check <html lang="es">
      const htmlTag = document.documentElement;
      result.lang = htmlTag.getAttribute('lang');
      if (result.lang !== 'es') {
        result.issues.push(`Missing or incorrect lang attribute: ${result.lang}`);
      }

      // Check <title>
      const titleTag = document.querySelector('title');
      if (titleTag) {
        result.title = titleTag.textContent.trim();
      } else {
        result.issues.push('Missing <title>');
      }

      // Check meta description
      const descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        result.description = descTag.getAttribute('content');
      } else {
        result.issues.push('Missing meta description');
      }

      // Check canonical
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        result.canonical = canonicalTag.getAttribute('href');
      } else {
        result.issues.push('Missing canonical URL');
      }

      // Count H1 tags
      const h1Tags = document.querySelectorAll('h1');
      result.h1Count = h1Tags.length;
      if (result.h1Count !== 1) {
        result.issues.push(`H1 count: ${result.h1Count} (should be 1)`);
      }

      // Check Open Graph
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      result.ogTitle = ogTitleTag ? ogTitleTag.getAttribute('content') : null;
      result.ogDescription = ogDescTag ? ogDescTag.getAttribute('content') : null;

      if (!result.ogTitle) result.issues.push('Missing og:title');
      if (!result.ogDescription) result.issues.push('Missing og:description');

      // Check Twitter Card
      const twitterCardTag = document.querySelector('meta[property="twitter:card"], meta[name="twitter:card"]');
      result.twitterCard = twitterCardTag ? twitterCardTag.getAttribute('content') : null;
      if (!result.twitterCard) result.issues.push('Missing twitter:card');

      // Check footer visibility
      const footer = document.querySelector('footer');
      result.footerVisible = !!footer;
      if (!result.footerVisible) {
        result.issues.push('Footer not found');
      }

      // Check images for alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        if (!alt || alt.trim() === '') {
          result.issues.push(`Image ${index + 1} missing alt text: ${src}`);
        }
      });

      // Check semantic landmarks
      const landmarks = {
        header: document.querySelector('header'),
        nav: document.querySelector('nav'),
        main: document.querySelector('main'),
        footer: document.querySelector('footer')
      };

      Object.entries(landmarks).forEach(([tag, element]) => {
        if (!element) {
          result.issues.push(`Missing <${tag}> landmark`);
        }
      });

    } catch (error) {
      result.issues.push(`Analysis error: ${error.message}`);
    }

    return result;
  }

  /**
   * Check special files
   */
  async checkSpecialFiles() {
    const specialChecks = [];

    // Check robots.txt
    try {
      const robotsResponse = await fetch(`${BASE_URL}/robots.txt`);
      if (robotsResponse.ok) {
        const robotsText = await robotsResponse.text();
        const hasSitemap = robotsText.includes('Sitemap: https://pintores-valencia.com/sitemap.xml');
        specialChecks.push({
          file: '/robots.txt',
          status: robotsResponse.status,
          issue: hasSitemap ? null : 'Missing or incorrect sitemap reference'
        });
      } else {
        specialChecks.push({
          file: '/robots.txt',
          status: robotsResponse.status,
          issue: 'File not found'
        });
      }
    } catch (error) {
      specialChecks.push({
        file: '/robots.txt',
        status: 'ERROR',
        issue: error.message
      });
    }

    // Check sitemap.xml
    try {
      const sitemapResponse = await fetch(`${BASE_URL}/sitemap.xml`);
      specialChecks.push({
        file: '/sitemap.xml',
        status: sitemapResponse.status,
        issue: sitemapResponse.ok ? null : 'Sitemap not accessible'
      });
    } catch (error) {
      specialChecks.push({
        file: '/sitemap.xml',
        status: 'ERROR',
        issue: error.message
      });
    }

    // Check sitemap-index.xml redirect (only works on Vercel, not local preview)
    try {
      const sitemapIndexResponse = await fetch(`${BASE_URL}/sitemap-index.xml`, { redirect: 'manual' });
      if (sitemapIndexResponse.status === 301) {
        const location = sitemapIndexResponse.headers.get('location');
        const correctRedirect = location && location.includes('/sitemap.xml');
        specialChecks.push({
          file: '/sitemap-index.xml',
          status: `${sitemapIndexResponse.status} -> ${location}`,
          issue: correctRedirect ? null : 'Incorrect redirect target'
        });
      } else if (sitemapIndexResponse.status === 200) {
        specialChecks.push({
          file: '/sitemap-index.xml',
          status: `${sitemapIndexResponse.status} (local preview)`,
          issue: 'Redirect configured in vercel.json (works in production)'
        });
      } else {
        specialChecks.push({
          file: '/sitemap-index.xml',
          status: sitemapIndexResponse.status,
          issue: 'Unexpected status'
        });
      }
    } catch (error) {
      specialChecks.push({
        file: '/sitemap-index.xml',
        status: 'ERROR',
        issue: error.message
      });
    }

    return specialChecks;
  }

  /**
   * Generate markdown report
   */
  generateReport() {
    const docsDir = path.join(__dirname, '..', 'docs');
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir);
    }

    const reportPath = path.join(docsDir, 'qa-report.md');
    
    let report = `# QA Report - SEO & Design Consistency\n\n`;
    report += `**Generated:** ${new Date().toISOString()}\n`;
    report += `**Base URL:** ${BASE_URL}\n`;
    report += `**Total Routes Analyzed:** ${this.results.length}\n\n`;

    // Summary
    const successCount = this.results.filter(r => r.status === 200 && r.issues.length === 0).length;
    const errorCount = this.results.filter(r => r.status !== 200).length;
    const warningCount = this.results.filter(r => r.status === 200 && r.issues.length > 0).length;

    report += `## Summary\n\n`;
    report += `- ✅ **Perfect:** ${successCount} routes\n`;
    report += `- ⚠️ **Issues:** ${warningCount} routes\n`;
    report += `- ❌ **Errors:** ${errorCount} routes\n\n`;

    // Routes table
    report += `## Route Analysis\n\n`;
    report += `| Route | Status | Title | H1 Count | Issues |\n`;
    report += `|-------|--------|-------|----------|--------|\n`;

    this.results.forEach(result => {
      const status = result.status === 200 ? '✅ 200' : `❌ ${result.status}`;
      const title = result.title ? `${result.title.substring(0, 40)}${result.title.length > 40 ? '...' : ''}` : '❌ Missing';
      const h1Count = result.h1Count === 1 ? '✅ 1' : `❌ ${result.h1Count}`;
      const issues = result.issues.length > 0 ? `⚠️ ${result.issues.length} issues` : '✅ None';
      
      report += `| ${result.route} | ${status} | ${title} | ${h1Count} | ${issues} |\n`;
    });

    // Detailed issues
    const routesWithIssues = this.results.filter(r => r.issues.length > 0);
    if (routesWithIssues.length > 0) {
      report += `\n## Detailed Issues\n\n`;
      routesWithIssues.forEach(result => {
        report += `### ${result.route}\n\n`;
        result.issues.forEach(issue => {
          report += `- ❌ ${issue}\n`;
        });
        report += `\n`;
      });
    }

    // Special files
    if (this.specialFiles && this.specialFiles.length > 0) {
      report += `## Special Files\n\n`;
      report += `| File | Status | Issue |\n`;
      report += `|------|--------|-------|\n`;
      this.specialFiles.forEach(file => {
        const status = typeof file.status === 'number' && file.status === 200 ? '✅ 200' : `❌ ${file.status}`;
        const issue = file.issue ? `❌ ${file.issue}` : '✅ OK';
        report += `| ${file.file} | ${status} | ${issue} |\n`;
      });
      report += `\n`;
    }

    // Footer
    report += `## Recommendations\n\n`;
    if (errorCount > 0) {
      report += `1. **Fix broken routes:** ${errorCount} routes returning non-200 status\n`;
    }
    if (warningCount > 0) {
      report += `1. **Address SEO issues:** ${warningCount} routes with missing metadata\n`;
    }
    report += `1. **Verify all images have descriptive alt text**\n`;
    report += `1. **Ensure consistent semantic HTML structure**\n`;
    report += `1. **Test responsive design on mobile devices**\n\n`;

    report += `---\n*Report generated by QA Crawler*\n`;

    fs.writeFileSync(reportPath, report);
    return reportPath;
  }

  /**
   * Run complete QA analysis
   */
  async run() {
    this.log(`${colors.bold}${colors.blue}🕷️  Starting QA Crawler Analysis${colors.reset}`);
    
    // Discover all routes
    const fileRoutes = await this.discoverFileRoutes();
    const navRoutes = await this.discoverNavLinks();
    
    // Combine all routes
    const allRoutes = new Set([...fileRoutes, ...navRoutes]);
    
    this.log(`${colors.green}Found ${allRoutes.size} routes to analyze${colors.reset}`);
    
    // Analyze each route
    for (const route of allRoutes) {
      const result = await this.analyzeRoute(route);
      this.results.push(result);
      
      // Show progress
      const status = result.status === 200 ? `${colors.green}✅` : `${colors.red}❌`;
      const issues = result.issues.length > 0 ? `${colors.yellow}(${result.issues.length} issues)` : '';
      this.log(`  ${status} ${route} ${issues}${colors.reset}`);
    }

    // Check special files
    this.log(`\n${colors.blue}Checking special files...${colors.reset}`);
    this.specialFiles = await this.checkSpecialFiles();
    
    this.specialFiles.forEach(file => {
      const status = typeof file.status === 'number' && file.status === 200 ? `${colors.green}✅` : `${colors.red}❌`;
      const issue = file.issue ? `${colors.yellow}(${file.issue})` : '';
      this.log(`  ${status} ${file.file} ${issue}${colors.reset}`);
    });

    // Generate report
    this.log(`\n${colors.blue}Generating report...${colors.reset}`);
    const reportPath = this.generateReport();
    
    // Summary
    const totalRoutes = this.results.length;
    const successRoutes = this.results.filter(r => r.status === 200 && r.issues.length === 0).length;
    const errorRoutes = this.results.filter(r => r.status !== 200).length;
    
    this.log(`\n${colors.bold}${colors.green}🎯 QA Analysis Complete!${colors.reset}`);
    this.log(`${colors.green}📊 ${successRoutes}/${totalRoutes} routes perfect${colors.reset}`);
    if (errorRoutes > 0) {
      this.log(`${colors.red}⚠️  ${errorRoutes} routes with errors${colors.reset}`);
    }
    this.log(`${colors.blue}📝 Report saved: ${reportPath}${colors.reset}`);
    
    return {
      totalRoutes,
      successRoutes,
      errorRoutes,
      reportPath,
      results: this.results
    };
  }
}

// Run crawler if called directly
if (import.meta.url.includes('qa-crawl.mjs')) {
  console.log('🚀 Starting QA Crawler...');
  const crawler = new QACrawler();
  
  try {
    await crawler.run();
    console.log('✅ Crawler completed successfully');
    process.exit(0);
  } catch (error) {
    console.error(`${colors.red}❌ Crawler failed: ${error.message}${colors.reset}`);
    console.error(error.stack);
    process.exit(1);
  }
}

export default QACrawler;