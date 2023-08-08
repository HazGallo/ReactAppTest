import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIcoGroupExample } from './ButtonIcoGroupExample';

import { Sizes } from '../../components/Button/types/buttonTypes';

const meta = {
  title: 'Components/ButtonIconGroup',
  component: ButtonIcoGroupExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIcoGroupExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    warning: false,
    isDisabled: false,
    sizeName: 'lg',
    readOnly: false,
  },
  argTypes: {
    sizeName: {
      control: { type: 'select', options: Sizes },
    },
  },
};
