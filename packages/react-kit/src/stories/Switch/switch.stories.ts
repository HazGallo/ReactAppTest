import type { Meta, StoryObj } from '@storybook/react';

import { ExampleSwitch } from './ExampleSwitch';

const meta = {
  title: 'Components/Switch',
  component: ExampleSwitch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizes: 'sm',
    iconOf: 'IconSend',
    iconOn: 'IconGallery',
    isDisabled: false
  },
  argTypes: {
    sizes: {
      control: { type: 'select' },
    },
    iconOn: {
      control: { type: 'select' },
    },
    iconOf: {
      control: { type: 'select' },
    },
  },
};
