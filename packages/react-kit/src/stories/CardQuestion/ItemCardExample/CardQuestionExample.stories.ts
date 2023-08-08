import type { Meta, StoryObj } from '@storybook/react';

import { CardQuestionExample } from './CardQuestionExample';

const meta = {
  title: 'Components/CardQuestion',
  component: CardQuestionExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardQuestionExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const cardQuestionSingle: Story = {
  args: {
    typeStatus: 'audio',
    InfoAndActionBar: '001',
    firstValueBadge: 'ab',
    secondValueBadge: 'abcd',
    editableTitle:
      'What are the key elements of building strong and successful customer relationships?',
    placeholder: 'title',
    bg: 'coAudio',
    title: '  Customer success',
    coverImage:
      'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80',
    sizeCard: 'md',
    errorMessage: 'Error Message',
    hasError: false,
    readOnly: false,
  },
  argTypes: {
    onClickEditable: { table: { disable: true } },
    onClickDrawer: { table: { disable: true } },

    sizeCard: {
      control: 'select',
    },
    typeStatus: {
      control: 'select',
    },
  },
};
