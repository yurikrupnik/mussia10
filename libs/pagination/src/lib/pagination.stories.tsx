import { Story, Meta } from '@storybook/react';
import { ThemeProvider } from '@mussia10/theme-provider';
import { Pagination, PaginationProps } from './pagination';

export default {
  component: Pagination,
  title: 'PocPage',
  argTypes: {
    page: {
      description: 'Current page, starts count from 0',
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <ThemeProvider>
    <Pagination {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  page: 1,
  count: 100,
  rowsPerPage: 20,
};
