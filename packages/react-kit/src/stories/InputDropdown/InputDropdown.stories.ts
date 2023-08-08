import type { Meta, StoryObj } from '@storybook/react';

import { IconsTypes } from '../../shared/iconsTypes/icons';
import { contentTypes } from '../../components/DropdownMenu/types/typesVersion';
import ExampleInput from './ExampleInput';

const meta = {
  title: 'Components/InputDropdown',
  component: ExampleInput,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ExampleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const arrayTitle = [
  {
    title: 'Dropdown option1',
    categoryTitle: 'Category1',
    icon: "IconChallenge"
  },
  {
    title: 'Dropdown option2',
    categoryTitle: 'Category1',
    icon: "IconTask"
  }, 
  {
    title: 'Dropdown option3',
    categoryTitle: 'Category2',
    icon: "IconSend"
  },
  {
    title: 'Dropdown option4',
    categoryTitle: 'Category2',
    icon: "IconPoll"
  },
];

export const content: Story = {
  args: {
    dataMenu: arrayTitle,
    disabled: false,
    iconTypes: 'IconGhost',
    categoryType: 'withCategory',
    warning: false,
    showIcon: false,
    sizeInput: 'lg',
    placeholder: 'Select an option',
  },
  argTypes: {
    dataMenu: { table: { disable: true } },
    categoryTitle: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onSelect: { table: { disable: true } },
    isSelected: { table: { disable: true } },
    typeVersion: {
      control: { type: 'select', options: contentTypes },
    },
    sizeInput: {
      control: { type: 'select', options: { md: 'md', lg: 'lg' } },
    },
    iconTypes: {
      control: { type: 'select', options: IconsTypes },
    },
    categoryType: {
      control: {
        type: 'select',
        options: { noCategory: 'noCategory', withCategory: 'withCategory' },
      },
    },
  },
};
