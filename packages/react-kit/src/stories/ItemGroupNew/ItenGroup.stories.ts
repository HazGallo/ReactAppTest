import type { Meta, StoryObj } from '@storybook/react';

import  { ItemGroupExampleNew } from './ItemGroupNewExample';

const meta = {
  title: 'components/ItemGroupNew',
  component: ItemGroupExampleNew,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ItemGroupExampleNew>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    placeholder: 'New section',
    isDisabled: false
  },
};
