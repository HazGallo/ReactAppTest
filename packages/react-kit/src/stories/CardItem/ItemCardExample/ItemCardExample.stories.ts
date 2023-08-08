import type { Meta, StoryObj } from '@storybook/react';

import { ContentTypes } from '../../../../src/components/Cards/CardItem/components/ItemPublicationStatus/types/TypesStatus';
import { contentTypes } from '../../../components/Badge/ContentBadge/types/BadgeTypes';
import { pathTypes } from '../../../components/Badge/PathBadge/types/PathBadgeTypes';
import { CardItemExample } from '../ItemCardExample/CardItemExample';
const meta = {
  title: 'Components/CardItem',
  component: CardItemExample,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardItemExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const cardItemSingle: Story = {
  args: {
    typeStatus: 'Published',
    typeBadge: 'audio',
    checked: false,
    InfoAndActionBar: '25 min',
    editableTitle: 'Meet the team in the office',
    placeholder: 'title',
    coverImage:
      'https://ik.imagekit.io/s8b2ycrch/imagen.jpg?updatedAt=1679594373657',
    date: 'mayo 14, 2025 15:30:00',
    sizeCard: 'md',
    placeholderSrc:
      'https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559',
    skeleton: false,
    errorMessage: 'Error Message',
    hasError: false,
    newCard: false,
    readOnly: false,
  },
  argTypes: {
    onClickEditable: { table: { disable: true } },
    onClickDrawer: { table: { disable: true } },
    scrollbar: { table: { disable: true } },
    typeStatus: {
      control: 'select',
      options: ContentTypes,
    },
    typeBadge: {
      control: 'select',
      options: {
        ...contentTypes,
        ...pathTypes,
      },
    },
    date: {
      control: 'date',
    },
    sizeCard: {
      control: 'select',
    },
  },
};
