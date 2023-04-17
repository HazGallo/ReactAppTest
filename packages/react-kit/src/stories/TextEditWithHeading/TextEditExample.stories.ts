import type { Meta, StoryObj } from '@storybook/react';
import { Content } from './index';

const meta = {
  title: 'Components/TextEditable',
  component: Content,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextEditExampleWithHeading: Story = {
  args: {
    readOnly: false,
    errorMessage: 'Error Message',
    sizesType: 'lg',
    hasError: false,
    scrollbar: false
  },
  argTypes: {
    sizesType: {
      control: { type: 'select' },
    },
  },
};
