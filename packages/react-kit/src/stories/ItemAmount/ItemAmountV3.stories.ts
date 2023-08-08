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
    name: 'Ryan Florence',
    src: 'https://images.unsplash.com/photo-1678874780591-0f4ba3fe5dde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    backgroundColor: 'baPink.500',
  },
  {
    name: 'Segun Adebayo',
    src: 'https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    name: 'Kent Dodds',
    src: 'https://images.unsplash.com/photo-1687639676496-ebb340ee4def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://images.unsplash.com/photo-1654867326639-3411d31e871a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://images.unsplash.com/photo-1687890425842-55d8928ecb7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    name: 'Another User',
    src: 'https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://images.unsplash.com/photo-1654867326639-3411d31e871a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
  },
];

export const contentTypesContents: Story = {
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
