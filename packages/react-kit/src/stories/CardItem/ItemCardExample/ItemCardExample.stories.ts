import type { Meta, StoryObj } from '@storybook/react';
import { CardItem } from '../../../components/CardItem';
import { ContentTypes } from '../../../components/CardItem/components/ItemPublicationStatus/types/TypesStatus';
import { pathTypes } from '../../../components/CardItem/components/BodyCard/Badge/PathBadge/types/PathBadgeTypes';
import { contentTypes } from '../../../components/CardItem/components/BodyCard/Badge/ContentBadge/types/BadgeTypes';

const meta = {
  title: 'Components/CardItem',
  component: CardItem,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardItem>;

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
    hasError: false
  },
  argTypes: {
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
      options: { sm: 'sm', md: 'md' },
    },
  },
};
