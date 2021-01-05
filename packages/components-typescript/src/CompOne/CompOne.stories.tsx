import React from 'react';
import { Story, Meta } from '@storybook/react'
// import { storiesOf } from '@storybook/react';

import CompOne from '.';

// storiesOf('CompOne', module).add('Default', () => <CompOne />);

export default {
  title: 'UI Components/CompOne',
  component: CompOne
} as Meta

const Template: Story<{}> = (args) => <CompOne {...args} />

export const Example = Template.bind({})
Example.args = {}
