import React from 'react';
import { CardItem } from '../../../components/Cards/CardItem';
import { contentType } from '../../../components/Badge/ContentBadge';
import { pathType } from '../../../components/Badge/PathBadge';
import { ContentTypeStatus } from '../../../../src/components/Cards/CardItem/components/ItemPublicationStatus';

interface Props {
  typeStatus: ContentTypeStatus;
  typeBadge: contentType | pathType;
  InfoAndActionBar: string;
  editableTitle: string;
  placeholder: string;
  checked?: boolean;
  coverImage: string;
  placeholderSrc: string;
  date: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
  errorMessage: string;
  hasError: boolean;
  readOnly?: boolean;
  scrollbar?: boolean;
  onClickEditable?: () => void;
  onClickDrawer?: any;
  newCard?: boolean;
}

export const CardItemExample = ({
  sizeCard,
  date,
  checked,
  coverImage,
  typeStatus,
  typeBadge,
  InfoAndActionBar,
  editableTitle,
  placeholder,
  placeholderSrc,
  skeleton,
  errorMessage,
  hasError,
  readOnly,
  newCard,
}: Props) => {
  return (
    <CardItem
      placeholderSrc={placeholderSrc}
      typeStatus={typeStatus}
      typeBadge={typeBadge}
      InfoAndActionBar={InfoAndActionBar}
      editableTitle={editableTitle}
      placeholder={placeholder}
      coverImage={coverImage}
      date={date}
      sizeCard={sizeCard}
      checked={checked}
      skeleton={skeleton}
      errorMessage={errorMessage}
      hasError={hasError}
      readOnly={readOnly}
      newCard={newCard}
    />
  );
};
