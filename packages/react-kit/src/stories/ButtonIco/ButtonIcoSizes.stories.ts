import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIco } from '../../components/ButtonIco/index';
import { Sizes } from '../../components/ButtonIco/types/buttonIcoTypes';
import { IconsTypes } from '../IconExample/types/IconsTypes';

const meta = {
  title: 'Components/ButtonIco',
  component: ButtonIco,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIco>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonIcoExample: Story = {
  args: {
    sizeName: 'md',
    disabled: false,
    warning: false,
    type: 'IconGhost',
  },
  argTypes: {
    sizeName: {
      control: { type: 'select', options: Sizes },
    },
    type: {
      control: { type: 'select', options: IconsTypes },
    },
  },
};
