import type { Meta, StoryObj } from '@storybook/react';
import { pathTypes } from '../../../components/CardItem/components/BodyCard/Badge/PathBadge/types/PathBadgeTypes';
import { BadgePath } from '../../../components/CardItem/components/BodyCard/Badge/PathBadge';

const meta = {
  title: 'Components/Badge',
  component: BadgePath,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BadgePath>;

export default meta;
type Story = StoryObj<typeof meta>;

export const pathBadge: Story = {
  args: {
    type: 'instagram',
    size: 'md',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: pathTypes },
    },
    size: {
      control: { type: 'select', options: { sm: 'sm', md: 'md' } },
    },
  },
};
