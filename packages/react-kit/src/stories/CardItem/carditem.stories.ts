import type { Meta, StoryObj } from '@storybook/react';
import { CardItem } from '../../../src/components/CardItem';

const meta = {
  title: 'Components/CardItem',
  component: CardItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    editable: 'Mountain',
    isChecked: false,
    coverImage:
      'https://images.unsplash.com/photo-1692804452207-d160f7fea1a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    article: 'ARTICLE',
    time: '15 min',
    date: '14/05/2025',
    hour: '15:30',
    sizeCard: 'md',
    typeIcon: 'IconGhost',
  },
  argTypes: {
    sizeCard: {
      control: 'select',
    },
    typeIcon: {
      control: 'select',
    },
  },
};
