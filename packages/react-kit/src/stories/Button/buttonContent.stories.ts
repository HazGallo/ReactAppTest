import type { Meta, StoryObj } from '@storybook/react';

import { ButtonExample } from './ButtonExample';

const meta = {
  title: 'Components/Button',
  component: ButtonExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizeName: 'md',
    warning: false,
    typeIcon: 'IconGhost',
    label: 'Button',
    isDisabled: false,
    variant: 'primary',
    formats: 'fixed',
    isLoading: false,
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    sizeName: {
      control: { type: 'select' },
    },
    typeIcon: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
    formats: {
      control: { type: 'select' },
    },
  },
};
