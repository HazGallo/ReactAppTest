import type { Meta, StoryObj } from '@storybook/react';
import { HeadingExample } from './index';

const meta = {
  title: 'Components/Heading',
  component: HeadingExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeadingExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const headingExample: Story = {
  args: {
    size: '2XL',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
};
