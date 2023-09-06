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
    isClicked: false,
    isDisabledButton: false,
    sizeButton: 'xl',
  },
  argTypes: {
    typeIcon: {
      control: 'select',
    },
    sizeButton: {
      control: 'select',
    },
  },
};
