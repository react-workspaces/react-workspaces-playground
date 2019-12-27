import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

const comps = require.context('@project/components-typescript/src', true, /.stories.jsx$/);

configure(() => {
  comps.keys().forEach(filename => comps(filename));
}, module);
