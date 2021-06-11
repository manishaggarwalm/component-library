import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProductItem } from './index';

export default {
  title: 'ProductItem',
  component: ProductItem,
  argTypes: {
  },
} as Meta;

const Template: Story<any> = (args) => <ProductItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Toshiba LLT',
};
