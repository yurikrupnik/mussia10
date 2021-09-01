import { Story, Meta } from '@storybook/react';
import { Storybook, StorybookProps } from './storybook';

export default {
  component: Storybook,
  title: 'Storybook',
} as Meta;

const Template: Story<StorybookProps> = (args) => <Storybook {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
