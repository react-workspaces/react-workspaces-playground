import { configure } from '@storybook/react';

configure(require.context('@ocdlimited/components-typescript/src', true, /.stories.tsx$/), module);
