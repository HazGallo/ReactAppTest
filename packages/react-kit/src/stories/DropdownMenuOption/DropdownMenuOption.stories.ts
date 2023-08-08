import type { Meta, StoryObj } from '@storybook/react';

import { IconsTypes } from '../../shared/iconsTypes/icons';
import { contentTypes } from '../../components/DropdownMenu/types/typesVersion';
import { ExampleMenuOption } from './ExampleMenuOption';

const meta = {
  title: 'Components/DropdownMenuOption',
  component: ExampleMenuOption,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ExampleMenuOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const content: Story = {
  args: {
    title: 'Management',
    isDisabled: false,
    iconTypes: 'IconGhost',
    warning: true,
    typeVersion: 'add',
    showIcon: true,
  },
  argTypes: {
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    },
    iconTypes: {
      control: { type: 'select', options: IconsTypes },
    },
  },
};
