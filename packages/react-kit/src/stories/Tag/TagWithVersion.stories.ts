import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../components/Tag';
import { contentTypes } from '../../components/Tag/types/typesVersion'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TagWithVersion: Story = {
  args: {
    label: 'label',
    disabled: false,
    typeVersion: 'add'
  },
  argTypes: {
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    }
  },
};
