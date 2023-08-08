import type { Meta, StoryObj } from '@storybook/react';

import SelectorImageExample from './SelectorImageExample';

const meta = {
  title: 'components/ImageSelector',
  component: SelectorImageExample,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof SelectorImageExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    maxFiles: 1,
    maxSize: 10 * 1000 * 1000,
    type: 'image',
    onDrop: (files: any) => {
      console.log({ files });
    },
    hasError: false,
    errorMessage: 'Error Message',
    warning: false,
    isDisabled: false,
    sizeMenu: 'md',
    readonly: false,
    placeholderSrc:
      'https://images.unsplash.com/photo-1684330677211-7d491d66c701?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  argTypes: {
    type: { table: { disable: true } },
    onDrop: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onChangeProgress: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    sizeMenu: {
      control: {
        type: 'select',
      },
    },
  },
};
