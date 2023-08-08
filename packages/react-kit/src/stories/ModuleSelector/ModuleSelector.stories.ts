import type { Meta, StoryObj } from '@storybook/react';
import { IconsTypes } from '../../shared/iconsTypes/icons';

import { ModuleSelectorExample } from './ModuleSelectorExample';

const meta = {
  title: 'Components/ModuleSelector',
  component: ModuleSelectorExample,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ModuleSelectorExample>;

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
    categoryTitle: 'RECOMMENDED',
    icon: 'IconVideo',
  },
];

export const NoExtraContent: Story = {
  args: {
    dataMenu: arrayTitle,
    isDisabled: false,
    placeholder: 'Title Module',
    warning: false,
    readOnly: false
  },
  argTypes: {
    dataMenu: { table: { disable: true } },
    checked: { table: { disable: true } }
  },
};
