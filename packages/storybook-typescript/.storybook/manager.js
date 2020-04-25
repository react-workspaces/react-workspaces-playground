import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import '@storybook/addon-links/register';
import addons from '@storybook/addons';
import registerRedux from 'addon-redux/register';

addParameters({
  options: {
    theme: themes.dark,
  },
});

registerRedux(addons);
