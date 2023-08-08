import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react';

import { BodyCard } from './components/BodyCard';

import { ItemEditableTitle } from '../CardItem/components/ItemEditableTitle';
import { ItemInfoAndActionBar } from '../CardItem/components/ItemInfoAndActionBar';

import TopicIndicator, { typeTopic } from './components/TopicIndicator';

interface Props extends BoxProps {
  InfoAndActionBar: string;
  editableTitle: string;
  placeholder: string;
  coverImage: string;
  sizeCard?: 'sm' | 'md';
  errorMessage: string;
  hasError: boolean;
  readOnly?: boolean;
  onClickEditable?: () => void;
  onClickDrawer?: any;
  title: string;
  typeStatus: typeTopic;
  bg: string;
  firstValueBadge: string;
  secondValueBadge: string;
}
export const CardQuestion = ({
  sizeCard,
  coverImage,
  InfoAndActionBar,
  editableTitle,
  placeholder,
  errorMessage,
  hasError,
  onClickEditable,
  onClickDrawer,
  title,
  typeStatus,
  readOnly,
  bg,
  firstValueBadge,
  secondValueBadge,
  ...rest
}: Props) => {
  const messageAlert = () => {
    alert('onclick event');
  };
  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <BodyCard
      {...rest}
      skeleton={false}
      bg={bg}
      coverImage={coverImage}
      sizeCard={sizeCard}
      onClickDrawer={onClickDrawer}
      firstValueBadge={firstValueBadge}
      secondValueBadge={secondValueBadge}
    >
      <Box marginTop="16px">
        <ItemInfoAndActionBar
          skeleton={false}
          text={InfoAndActionBar}
          onClick={() => messageAlert()}
          sizeCard={sizeCard}
        />
      </Box>

      <Box
        onClick={(e) => e.stopPropagation()}
        marginTop={adaptedSizeSm || sizeCard === 'sm' ? '12px' : '16px'}
      >
        <ItemEditableTitle
          title={editableTitle}
          placeholder={placeholder}
          sizeCard={sizeCard}
          skeleton={false}
          errorMessage={errorMessage}
          hasError={hasError}
          readOnly={readOnly}
          scrollbar={false}
          onClickEditable={onClickEditable}
          maxRows={adaptedSizeSm ? 3 : sizeCard === 'md' ? 5 : 3}
        />
      </Box>
      <Box pos="absolute" left="0" bottom="0">
        <TopicIndicator
          title={title}
          type={typeStatus}
          bg={bg}
          sizeCard={sizeCard}
        />
      </Box>
    </BodyCard>
  );
};
