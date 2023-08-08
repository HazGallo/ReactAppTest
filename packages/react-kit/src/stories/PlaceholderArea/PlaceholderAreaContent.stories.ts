import type { Meta, StoryObj } from '@storybook/react';

import { PlaceholderAreaExtra } from './PlaceholderAreaExtra';

const meta = {
  title: 'Components/PlaceholderArea',
  component: PlaceholderAreaExtra,
  parameters: {
    layout: 'normal',
  },
} satisfies Meta<typeof PlaceholderAreaExtra>;

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

export const ExtraContent: Story = {
  args: {
    dataMenu: arrayTitle,
    title: 'Add new contents to the section',
    description: `Create new cards through the "new button"!`,
    typeIcon: 'IconCards',
  },
  argTypes: {
    typeIcon: { control: { type: 'select' } },
    dataMenu: { table: { disable: true } },
  },
};
