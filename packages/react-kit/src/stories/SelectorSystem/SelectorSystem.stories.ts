import type { Meta, StoryObj } from '@storybook/react';

import { SelectorSystemExample } from './SelectorSystemExample';

const meta = {
  title: 'Components/SelectorSystem',
  component: SelectorSystemExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectorSystemExample>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectorData = [
  {
    typeIcon: 'IconGhost',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconAudio',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconChallenge',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconAudio',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconArticle',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconGallery',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconArticle',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconGame',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconGhost',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    typeIcon: 'IconArticle',
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
];

export const content: Story = {
  args: {
    selectorData: selectorData,
    type: 'lg',
    selectionType: 'multipleChoice',
  },
  argTypes: {
    selectorData: { table: { disable: true } },
    type: {
      control: { type: 'select'},
    },
    selectionType: {
      control: {
        type: 'select',
        options: { single: 'single', multipleChoice: 'multipleChoice' },
      },
    },
  },
};
