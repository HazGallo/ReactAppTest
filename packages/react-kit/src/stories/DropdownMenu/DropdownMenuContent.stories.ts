import type { Meta, StoryObj } from '@storybook/react';

import { contentTypes } from '../../components/DropdownMenu/types/typesVersion';
import { ExampleMenuContent } from './ExampleMenuContent';

const meta = {
  title: 'Components/DropdownMenu',
  component: ExampleMenuContent,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof ExampleMenuContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const arrayTitle = [
  {
    title: 'Audio',
  },
  {
    title: 'Article',
  },
  {
    title: 'Video',
  },
  {
    title: 'Image',
  },
  {
    title: 'External',
  },
  {
    title: 'Pdf',
  },
  {
    title: 'Gallery',
  },
  {
    title: 'Html',
  },
  {
    title: 'Zip',
  },
  {
    title: 'Task',
  },
  {
    title: 'Poll',
  },
  {
    title: 'Test',
  },
  {
    title: 'Game',
  },
];

export const contentOptionIco: Story = {
  args: {
    dataMenu: arrayTitle,
    isDisabled: false,
    iconTypes: 'IconGhost',
    positioning: 'center',
    isOpen: true,
    categoryType: 'withCategory',
    warning: false,
    showIcon: true,
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
