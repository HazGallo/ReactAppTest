import type { Meta, StoryObj } from '@storybook/react';

import { ItemAmount } from '../../components/ItemAmount';

const meta = {
  title: 'Components/ItemAmount',
  component: ItemAmount,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ItemAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

const avatars = [
  {
    name: 'Another User',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Another User',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Another User',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Another User',
    src: 'https://bit.ly/prosper-baba',
  },
];

export const contentTypesUser: Story = {
  args: {
    size: 'sm',
    isDisabled: false,
    avatars: avatars,
    maxAvatar: 3,
    amount: 34,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    avatars: { table: { disable: true } },
    maxAvatar: { table: { disable: true } },
  },
};
