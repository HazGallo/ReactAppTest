import type { Meta, StoryObj } from '@storybook/react';

import { ExampleSelector } from './ExampleSelector';

const meta = {
  title: 'Components/Selector',
  component: ExampleSelector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectorWithIcon: Story = {
  args: {
    isDisabled: false,
    warning: false,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
    typeIcon: 'IconGhost',
    type: 'lg',
  },
  argTypes: {
    typeIcon: { control: { type: 'select' } },
    type: {
      control: { type: 'select' },
    },
  },
};
