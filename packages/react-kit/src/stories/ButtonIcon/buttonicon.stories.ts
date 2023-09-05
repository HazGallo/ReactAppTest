import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '../../../src/components/ButtonIcon';

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    typeIcon: 'IconGhost',
  },
  argTypes: {
    typeIcon: {
      control: 'select',
    },
  },
};
