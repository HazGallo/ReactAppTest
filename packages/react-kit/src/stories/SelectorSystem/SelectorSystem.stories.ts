import type { Meta, StoryObj } from '@storybook/react';
import { SelectorSystem } from '../../components/SelectorSystem';
import {
  IconArticle,
  IconAudio,
  IconChallenge,
  IconGallery,
  IconGame,
  IconGhost,
} from '../../assets/customIcons';

const meta = {
  title: 'Components/SelectorSystem',
  component: SelectorSystem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SelectorSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectorData = [
  {
    icon: IconGhost,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconAudio,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconChallenge,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconAudio,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconArticle,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconGallery,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconArticle,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconGame,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconGhost,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
  {
    icon: IconArticle,
    title: 'Individual',
    description: 'Users will compete for the rankings top positions',
  },
];

export const content: Story = {
  args: {
    disabled: false,
    warning: false,
    selectorData: selectorData,
    type: 'lg',
    selectionType: 'multipleChoice',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: { lg: 'lg', md: 'md', sm: 'sm' } },
    },
    selectionType: {
      control: {
        type: 'select',
        options: { single: 'single', multipleChoice: 'multipleChoice' },
      },
    },
  },
};
