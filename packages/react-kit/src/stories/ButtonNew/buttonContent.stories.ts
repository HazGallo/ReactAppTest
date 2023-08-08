import type { Meta, StoryObj } from '@storybook/react';

import { ButtonNewExample } from './ButtonNewExample';

const meta = {
  title: 'Components/ButtonNew',
  component: ButtonNewExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonNewExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizeName: 'md',
    warning: false,
    iconLeft: 'IconPlusNew',
    label: 'New',
    isDisabled: false,
    formats: 'fixed',
  },
  argTypes: {
    isSelected: { table: { disable: true } },
    sizeName: {
      control: { type: 'select' },
    },
    iconLeft: {
      control: { type: 'select' },
    },
    formats: {
      control: { type: 'select' },
    },
  },
};
