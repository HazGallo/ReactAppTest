import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderTestExample } from './PlaceholderTestExample';

const meta = {
  title: 'Components/PlaceholderTestQuestion',
  component: PlaceholderTestExample,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof PlaceholderTestExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    title: ' Drop your questions here!',
    description: `or search in your device`,
  },
};
