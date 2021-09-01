import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '@mussia10/theme-provider';
import { PocPage, PocPageProps } from './poc-page';

export default {
  component: PocPage,
  title: 'PocPage',
} as Meta;

const Template: Story<PocPageProps> = (args) => (
  <ThemeProvider>
    <PocPage {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {};
