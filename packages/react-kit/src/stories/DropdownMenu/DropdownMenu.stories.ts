import type { Meta, StoryObj } from '@storybook/react';

import { contentTypes } from '../../components/DropdownMenu/types/typesVersion';
import { ExampleMenu } from './ExampleMenu';

const meta = {
  title: 'Components/DropdownMenu',
  component: ExampleMenu,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ExampleMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const arrayTitle = [
  {
    title: 'Dropdown option1',
    categoryTitle: 'Category 1',
    icon: "IconTask"
  },
  {
    title: 'Dropdown option2',
    categoryTitle: 'Category 1',
    icon: "IconChallenge"
  },
  {
    title: 'Dropdown option4',
    categoryTitle: 'Category 2',
    icon: "IconSend"
  },
  {
    title: 'Dropdown option5',
    categoryTitle: 'Category 2',
    icon: "IconPoll"
  },
  {
    title: 'Dropdown option3',
    categoryTitle: 'Category 1',
    icon: "IconVideo"
  }
];

export const contentOption: Story = {
  args: {
    dataMenu: arrayTitle,
    isDisabled: false,
    iconTypes: 'IconGhost',
    positioning: 'center',
    isOpen: true,
    categoryType: 'withCategory',
    warning: false,
    showIcon: false,
  },
  argTypes: {
    dataMenu: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    iconTypes: { table: { disable: true } },
    isOpen: { table: { disable: true } },
    categoryTitle: { table: { disable: true } },
    isSelected: { table: { disable: true } },
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    },
    categoryType: {
      control: {
        type: 'select',
        options: { noCategory: 'noCategory', withCategory: 'withCategory' },
      },
    },
    positioning: {
      control: {
        type: 'select',
        options: { center: 'center', left: 'left', right: 'right' },
      },
    },
  },
};
