import type { Meta, StoryObj } from '@storybook/react';

import { PlaceholderAreaNoExtra } from './PlaceholderAreaNoExtra';

const meta = {
  title: 'Components/PlaceholderArea',
  component: PlaceholderAreaNoExtra,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof PlaceholderAreaNoExtra>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoExtraContent: Story = {
  args: {
    title: 'Add new contents to the section',
    description: `Create new cards through the "new button"!`,
    typeIcon: 'IconCards',
  },
  argTypes: {
    typeIcon: { control: { type: 'select' } },
  },
};
