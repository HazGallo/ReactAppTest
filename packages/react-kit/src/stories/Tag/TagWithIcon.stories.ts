import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../components/Tag';
import { IconGhost } from '../../assets/customIcons';
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

export const TagWithIcon: Story = {
  args: {
    label: 'label',
    icon: IconGhost,
    disabled: false,
  },
  argTypes: {
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    }
  },
};
