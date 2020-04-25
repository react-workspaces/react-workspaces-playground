import { configure } from '@storybook/react';

configure(require.context('@ocdlimited/components/src', true, /.stories.js$/), module);
