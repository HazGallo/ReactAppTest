import type { Meta, StoryObj } from '@storybook/react';

import { ButtonHoldExample } from './ButtonHoldExample';
import { IconsTypes } from '../../shared/iconsTypes/icons';

const meta = {
  title: 'Components/ButtonHold',
  component: ButtonHoldExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonHoldExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizeName: 'md',
    warning: false,
    isDisabled: false,
    confirmation: 'Published!',
    hold: 'Sure?',
    cta: 'Hold to publish',
    iconConfirmation: 'IconSend',
    iconCta: 'IconSend',
    iconHold: 'IconSend',
  },
  argTypes: {
    sizeName: {
      control: { type: 'select' },
    },
    iconConfirmation: {
      control: { type: 'select', options: IconsTypes },
    },
    iconCta: {
      control: { type: 'select', options: IconsTypes },
    },
    iconHold: {
      control: { type: 'select', options: IconsTypes },
    },
  },
};
