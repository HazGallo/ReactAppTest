import type { Meta, StoryObj } from '@storybook/react';

import { TagSystemExample } from './TagSystemExample';

const meta = {
  title: 'Components/TagSystem',
  component: TagSystemExample,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof TagSystemExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    isDisabled: false,
    type: 'menu',
    warning: false,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: { menu: 'menu', writting: 'writting' },
      },
    },
  },
};
