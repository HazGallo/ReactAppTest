import type { Meta, StoryObj } from '@storybook/react';
import { Content } from './index';

const meta = {
  title: 'Components/CardItem',
  component: Content,
  parameters: {
    layout: 'full',
  },
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const itemCardFlex: Story = {};
