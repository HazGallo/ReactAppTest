import type { Meta, StoryObj } from '@storybook/react';

import { ButtonIconExample } from './ButtonIconExample';

import { Sizes } from '../../components/ButtonIco/types/buttonIcoTypes';
import { IconsTypes } from '../../shared/iconsTypes/icons';

const meta = {
  title: 'Components/ButtonIco',
  component: ButtonIconExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIconExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    sizeName: 'md',
    isDisabled: false,
    warning: false,
    typeIcon: 'IconGhost',
    backgroundType: 'backgroundDefault',
    readOnly: false,
  },
  argTypes: {
    onClick: { table: { disable: true } },
    sizeName: {
      control: { type: 'select', options: Sizes },
    },
    typeIcon: {
      control: { type: 'select', options: IconsTypes },
    },
    backgroundType: {
      control: {
        type: 'select',
      },
    },
  },
};
