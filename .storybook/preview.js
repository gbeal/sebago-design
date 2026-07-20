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
        { name: 'dusk',   value: '#101D13' },
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
  initialGlobals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute('data-theme', context.globals.theme);
      return story();
    },
  ],
};

export default preview;
