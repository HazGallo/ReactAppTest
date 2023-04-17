import type { Meta, StoryObj } from '@storybook/react';
import { IconExample } from './index';
import { contentTypes } from './types/IconsTypes'

const meta = {
  title: 'Components/Icons',
  component: IconExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const icons: Story = {
  args: {
    size: '24px',
    type: 'IconArticle',
},
  argTypes: {
    size: {
      control: { type: 'select', options: {16: '16px', 24: '24px', 32: '32px', 48: '48px', 64: '64px'}},
    },
    type: {
      control: { type: 'select', options: contentTypes },
    },
  },
};
