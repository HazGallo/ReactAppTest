import type { Meta, StoryObj } from '@storybook/react';

import InputCheckboxExample from '.';

const meta = {
  title: 'Components/InputCheckbox',
  component: InputCheckboxExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputCheckboxExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    checked: false,
    isDisabled: false,
  },
};
