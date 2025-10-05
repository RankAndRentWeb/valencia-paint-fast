import { visit } from 'unist-util-visit';

export default function rehypeRemoveFirstH1() {
  return (tree: any, file: any) => {
    let removed = false;
    visit(tree, 'element', (node, idx, parent) => {
      if (!removed && node.tagName === 'h1' && parent && Array.isArray(parent.children)) {
        parent.children.splice(idx, 1);
        removed = true;
      }
    });
  };
}