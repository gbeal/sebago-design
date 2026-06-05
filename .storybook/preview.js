import '../src/tokens/tokens.css';
import '../src/base.css';

/** @type {import('@storybook/html').Preview} */
const preview = {
  parameters: {
    backgrounds: {
      default: 'linen',
      values: [
        { name: 'linen',  value: '#FDFBF7' },
        { name: 'white',  value: '#ffffff' },
        { name: 'canopy', value: '#2A5438' },
      ],
    },
    viewport: {
      viewports: {
        mobile:  { name: 'Mobile',  styles: { width: '390px',  height: '844px' } },
        tablet:  { name: 'Tablet',  styles: { width: '768px',  height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '900px' } },
      },
    },
  },
};

export default preview;
