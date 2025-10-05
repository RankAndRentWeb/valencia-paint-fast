import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import type { Blockquote, Text, Paragraph } from 'mdast';

const remarkCallouts: Plugin = () => {
  return (tree) => {
    visit(tree, 'blockquote', (node: Blockquote) => {
      // Buscar el primer párrafo del blockquote
      const firstParagraph = node.children.find(child => child.type === 'paragraph') as Paragraph;
      
      if (!firstParagraph) return;
      
      // Buscar el primer texto del párrafo
      const firstText = firstParagraph.children.find(child => child.type === 'text') as Text;
      
      if (!firstText) return;
      
      const text = firstText.value.toLowerCase();
      
      let calloutType: string | null = null;
      
      if (text.startsWith('la clave:')) {
        calloutType = 'callout-tip';
      } else if (text.startsWith('la solución es:') || text.startsWith('la solucion es:')) {
        calloutType = 'callout-solution';
      }
      
      if (calloutType) {
        // Convertir el blockquote en un div con clases especiales
        (node as any).type = 'element';
        (node as any).tagName = 'div';
        (node as any).properties = {
          className: `callout ${calloutType}`
        };
        (node as any).data = {
          hName: 'div',
          hProperties: {
            className: `callout ${calloutType}`
          }
        };
      }
    });
  };
};

export default remarkCallouts;