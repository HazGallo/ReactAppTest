import type { Meta, StoryObj } from '@storybook/react';

import { badgeTypes } from '../../../components/CardItem/components/BodyCard/Badge/ContentBadge/types/BadgeTypes';
import { BadgeContent } from '../../../components/CardItem/components/BodyCard/Badge/ContentBadge';

const meta = {
  title: 'Components/Badge',
  component: BadgeContent,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BadgeContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const contentBadge: Story = {
  args: {
    type: 'article',
    size: 'md',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: badgeTypes },
    },
    size: {
      control: {
        type: 'select',
        options: { sm: 'sm', md: 'md' },
      },
    },
  },
};
