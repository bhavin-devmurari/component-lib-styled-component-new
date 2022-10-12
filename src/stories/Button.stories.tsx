import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

// const Template: Story<ButtonProps & { disabled: boolean }> = (args) => (
//   <Button {...args}>My button</Button>
// );
const Template: Story = (args) => <Button {...args}> Submit </Button>;
export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
