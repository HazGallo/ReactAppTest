import { CardQuestion } from '../../../../src/components/Cards/CardQuestion';
import { typeTopic } from '../../../../src/components/Cards/CardQuestion/components/TopicIndicator';

interface Props {
  typeStatus: typeTopic;
  InfoAndActionBar: string;
  editableTitle: string;
  placeholder: string;
  coverImage: string;
  title: string;
  sizeCard?: 'sm' | 'md';
  bg: string;
  errorMessage: string;
  hasError: boolean;
  readOnly?: boolean;
  onClickEditable?: () => void;
  onClickDrawer?: any;
  firstValueBadge: string;
  secondValueBadge: string;
}

export const CardQuestionExample = ({
  sizeCard,
  title,
  coverImage,
  typeStatus,
  InfoAndActionBar,
  editableTitle,
  placeholder,
  errorMessage,
  hasError,
  readOnly,
  bg,
  firstValueBadge,
  secondValueBadge,
}: Props) => {
  return (
    <CardQuestion
      bg={bg}
      title={title}
      firstValueBadge={firstValueBadge}
      secondValueBadge={secondValueBadge}
      typeStatus={typeStatus}
      InfoAndActionBar={InfoAndActionBar}
      editableTitle={editableTitle}
      placeholder={placeholder}
      coverImage={coverImage}
      sizeCard={sizeCard}
      errorMessage={errorMessage}
      hasError={hasError}
      readOnly={readOnly}
    />
  );
};
