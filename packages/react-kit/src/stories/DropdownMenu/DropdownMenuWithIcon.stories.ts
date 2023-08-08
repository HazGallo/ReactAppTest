import type { Meta, StoryObj } from '@storybook/react';

import { contentTypes } from '../../components/DropdownMenu/types/typesVersion';
import { ExampleMenuIcons } from './ExampleMenuIcons';

const meta = {
  title: 'Components/DropdownMenu',
  component: ExampleMenuIcons,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ExampleMenuIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

const arrayTitle = [
  {
    title: 'Dropdown option1',
    categoryTitle: 'RECOMMENDED',
    icon: 'IconTest',
  },
  {
    title: 'Dropdown option2',
    categoryTitle: 'RECOMMENDED',
    icon: 'IconChallenge',
  },
  {
    title: 'Dropdown option3',
    categoryTitle: 'RECOMMENDED',
    icon: 'IconUnsplash',
  },
  {
    title: 'Dropdown option4',
    categoryTitle: 'RECOMMENDED',
    icon: 'IconTask',
  },
  {
    title: 'Dropdown option15',
    categoryTitle: 'RECOMMENDED',
    icon: 'IconVideo',
  },
  {
    title: 'Dropdown option5',
    categoryTitle: 'ALL ICONS',
    icon: 'IconEdit',
  },
  {
    title: 'Dropdown option6',
    categoryTitle: 'ALL ICONS',
    icon: 'IconDelete',
  },
  {
    title: 'Dropdown option7',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPoll',
  },
  {
    title: 'Dropdown option8',
    categoryTitle: 'ALL ICONS',
    icon: 'IconZip',
  },
  {
    title: 'Dropdown option9',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPdf',
  },
  {
    title: 'Dropdown option10',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPlaylist',
  },
  {
    title: 'Dropdown option11',
    categoryTitle: 'ALL ICONS',
    icon: 'IconExternal',
  },
  {
    title: 'Dropdown option12',
    categoryTitle: 'ALL ICONS',
    icon: 'IconImage',
  },
  {
    title: 'Dropdown option13',
    categoryTitle: 'ALL ICONS',
    icon: 'IconUncropped',
  },
  {
    title: 'Dropdown option14',
    categoryTitle: 'ALL ICONS',
    icon: 'IconGhost',
  },
  {
    title: 'Dropdown option15',
    categoryTitle: 'ALL ICONS',
    icon: 'IconEdit',
  },
  {
    title: 'Dropdown option16',
    categoryTitle: 'ALL ICONS',
    icon: 'IconDelete',
  },
  {
    title: 'Dropdown option17',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPoll',
  },
  {
    title: 'Dropdown option18',
    categoryTitle: 'ALL ICONS',
    icon: 'IconZip',
  },
  {
    title: 'Dropdown option19',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPdf',
  },
  {
    title: 'Dropdown option20',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPlaylist',
  },
  {
    title: 'Dropdown option21',
    categoryTitle: 'ALL ICONS',
    icon: 'IconExternal',
  },
  {
    title: 'Dropdown option22',
    categoryTitle: 'ALL ICONS',
    icon: 'IconImage',
  },
  {
    title: 'Dropdown option23',
    categoryTitle: 'ALL ICONS',
    icon: 'IconUncropped',
  },
  {
    title: 'Dropdown option24',
    categoryTitle: 'ALL ICONS',
    icon: 'IconGhost',
  },
  {
    title: 'Dropdown option25',
    categoryTitle: 'ALL ICONS',
    icon: 'IconEdit',
  },
  {
    title: 'Dropdown option26',
    categoryTitle: 'ALL ICONS',
    icon: 'IconDelete',
  },
  {
    title: 'Dropdown option27',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPoll',
  },
  {
    title: 'Dropdown option28',
    categoryTitle: 'ALL ICONS',
    icon: 'IconZip',
  },
  {
    title: 'Dropdown option29',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPdf',
  },
  {
    title: 'Dropdown option30',
    categoryTitle: 'ALL ICONS',
    icon: 'IconPlaylist',
  },
  {
    title: 'Dropdown option31',
    categoryTitle: 'ALL ICONS',
    icon: 'IconExternal',
  },
  {
    title: 'Dropdown option32',
    categoryTitle: 'ALL ICONS',
    icon: 'IconImage',
  },
  {
    title: 'Dropdown option33',
    categoryTitle: 'ALL ICONS',
    icon: 'IconUncropped',
  },
  {
    title: 'Dropdown option34',
    categoryTitle: 'ALL ICONS',
    icon: 'IconGhost',
  },
];

export const contentWithIcons: Story = {
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
    showIcon: { table: { disable: true } },
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
