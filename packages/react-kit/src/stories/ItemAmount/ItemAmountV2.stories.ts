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
    name: 'What is your favorite hobby?',
    backgroundColor: 'baPink.500',
  },
  {
    name: 'Have you ever traveled abroad? If so, where did you go?',
    backgroundColor: 'baViolet.800',
  },
  {
    name: 'What is your favorite book/movie and why?',
    backgroundColor: 'baOceanBlue.500',
  },
  {
    name: 'What is your favorite hobby?',
    backgroundColor: 'baPink.500',
  },
  {
    name: 'Have you ever traveled abroad? If so, where did you go?',
    backgroundColor: 'baViolet.800',
  },
  {
    name: 'What is your favorite book/movie and why?',
    backgroundColor: 'baOceanBlue.500',
  },
  {
    name: 'What is your favorite hobby?',
    backgroundColor: 'baPink.500',
  },
  {
    name: 'Have you ever traveled abroad? If so, where did you go?',
    backgroundColor: 'baViolet.800',
  },
  {
    name: 'What is your favorite book/movie and why?',
    backgroundColor: 'baOceanBlue.500',
  },
  {
    name: 'What is your favorite hobby?',
    backgroundColor: 'baPink.500',
  },
  {
    name: 'Have you ever traveled abroad? If so, where did you go?',
    backgroundColor: 'baViolet.800',
  },
  {
    name: 'What is your favorite book/movie and why?',
    backgroundColor: 'baOceanBlue.500',
  },
];

export const contentTypesQuestions: Story = {
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
