import type { Meta, StoryObj } from '@storybook/react';

import { ExampleTag } from './ExampleTag';

import { contentTypes } from '../../components/Tag/types/typesVersion';

const meta = {
  title: 'Components/Tag',
  component: ExampleTag,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    label: 'label',
    typeIcon: 'IconGhost',
    isDisabled: false
  },
  argTypes: {
    typeIcon: {
      control: { type: 'select' },
    },
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    },
  },
};
