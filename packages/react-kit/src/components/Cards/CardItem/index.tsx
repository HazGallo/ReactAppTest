import { Box, BoxProps } from '@chakra-ui/react';

import { BodyCard } from './components/BodyCard';
import { ItemInfoAndActionBar } from './components/ItemInfoAndActionBar';
import { ItemEditableTitle } from './components/ItemEditableTitle';
import { ItemPublicationStatus } from './components/ItemPublicationStatus';

import { contentType } from '../../Badge/ContentBadge';
import { pathType } from '../../Badge/PathBadge';

type ContentTypeStatus = 'Draft' | 'Planned' | 'Published' | 'none';

interface Props extends BoxProps {
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
export const CardItem = ({
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
  scrollbar,
  onClickEditable,
  onClickDrawer,
  newCard,
  ...rest
}: Props) => {
  const x = new Date(date);

  const messageAlert = () => {
    alert('onclick event');
  };

  return (
    <BodyCard
      {...rest}
      type={typeBadge}
      skeleton={skeleton}
      placeholderSrc={placeholderSrc}
      checked={checked}
      coverImage={coverImage}
      sizeCard={sizeCard}
      onClickDrawer={onClickDrawer}
      newCard={newCard}
    >
      <ItemInfoAndActionBar
        skeleton={skeleton}
        text={InfoAndActionBar}
        onClick={() => messageAlert()}
        sizeCard={sizeCard}
      />

      <Box onClick={(e) => e.stopPropagation()}>
        <ItemEditableTitle
          title={editableTitle}
          placeholder={placeholder}
          sizeCard={sizeCard}
          skeleton={skeleton}
          errorMessage={errorMessage}
          hasError={hasError}
          readOnly={readOnly}
          scrollbar={scrollbar}
          onClickEditable={onClickEditable}
        />
      </Box>

      <ItemPublicationStatus
        skeleton={skeleton}
        type={typeStatus}
        day={x?.getDate()}
        month={x?.getMonth() + 1}
        year={x?.getFullYear()}
        hour={x?.getHours()}
        minute={x?.getMinutes()}
        sizeCard={sizeCard}
      />
    </BodyCard>
  );
};
