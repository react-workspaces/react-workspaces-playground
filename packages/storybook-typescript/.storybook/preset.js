module.exports = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  '@storybook/preset-create-react-app',
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
      sourceLoaderOptions: null,
    },
  },
];
