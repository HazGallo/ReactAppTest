import type { Meta, StoryObj } from '@storybook/react';

import { ItemGroupExampleExtra } from './ItemGroupExampleExtra';

const meta = {
  title: 'components/ItemGroup',
  component: ItemGroupExampleExtra,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ItemGroupExampleExtra>;

export default meta;
type Story = StoryObj<typeof meta>;

const avatars = [
  {
    name: 'Ryan Florence',
    src: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    src: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    src: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    src: 'https://bit.ly/code-beast',
  },
  {
    name: 'Another User',
    src: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prosper Otemuyiwa',
    src: 'https://bit.ly/prosper-baba',
  },
];

export const ExtraContent: Story = {
  args: {
    placeholder: 'placeholder',
    isDisabled: false,
    title: 'Department',
    readonly: false,
    BadgeGroupColor: 'lkOrange.500',
    src: 'https://media.istockphoto.com/id/1297159365/photo/portrait-of-young-smiling-woman-face-partially-covered-with-flying-hair-in-windy-day-standing.jpg?b=1&s=612x612&w=0&k=20&c=rJimlL4q1qai0WNn5_u0lGTq63tUkGbafK6OwAKOJoc=',
    avatars: avatars,
    amount: 4,
  },
  argTypes: {
    onClick: { table: { disable: true } },
    avatars: { table: { disable: true } },
  },
};
