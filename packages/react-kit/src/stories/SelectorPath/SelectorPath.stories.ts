import type { Meta, StoryObj } from '@storybook/react';

import { ExampleSelectorPath } from './ExampleSelectorPath';

const meta = {
  title: 'Components/SelectorPath',
  component: ExampleSelectorPath,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleSelectorPath>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    isDisabled: false,
    warning: false,
    type: 'SelectorPathCourse',
  },
  argTypes: {
    icon: { table: { disable: true } },
    type: {
      control: {
        type: 'select',
      },
    },
  },
};
