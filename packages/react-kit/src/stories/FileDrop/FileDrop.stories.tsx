import type { Meta, StoryObj } from '@storybook/react';
import { FileDrop } from '../../../src/components/FileDrop';

const meta = {
  title: 'Components/FileDrop',
  component: FileDrop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FileDrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {};
