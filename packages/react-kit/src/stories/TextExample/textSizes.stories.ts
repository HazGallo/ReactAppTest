import type { Meta, StoryObj } from '@storybook/react';
import { TextExample } from './index';

const meta = {
  title: 'Components/Text',
  component: TextExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const textExample: Story = {
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
};
