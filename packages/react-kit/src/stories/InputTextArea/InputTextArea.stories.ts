import type { Meta, StoryObj } from '@storybook/react';

import { InputTextAreaExample } from './InputTextAreaExample';

const meta = {
  title: 'Components/InputTextArea',
  component: InputTextAreaExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputTextAreaExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    placeholder: 'Placeholder',
    warning: false,
    isDisabled: false,
    typeResize: 'horizontal',
  },
  argTypes: {
    typeResize: {
      control: {
        type: 'select'
      },
    },
  },
};