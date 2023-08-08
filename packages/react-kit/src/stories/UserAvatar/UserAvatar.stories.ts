import type { Meta, StoryObj } from '@storybook/react';

import { UserAvatar } from '../../components/UserAvatar';

const meta = {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizes: 'lg',
    isDisabled: false,
    name: 'Natanael Sarai',
    avatarSrc: 'https://bit.ly/sage-adebayo',
    backgroundColor: 'paCourse',
  },
  argTypes: {
    sizes: {
      control: { type: 'select' },
    },
  },
};
