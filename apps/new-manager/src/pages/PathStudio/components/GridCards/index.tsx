import { memo } from 'react';
import CardItemGrid from './components/CardItemGrid';
import CardQuestionItem from './components/CardQuestionItem';

import { Element } from './interfaces/propertiesCard';

const GridCards = memo(
  (
    props: Element & {
      isDragging: boolean;
      typeCard: 'cardItem' | 'cardQuestion';
    }
  ) => {
    const { typeCard = 'cardItem' } = props;

    if (typeCard === 'cardItem') {
      return <CardItemGrid {...props} />;
    } else {
      return <CardQuestionItem {...props} />;
    }
  }
);

export default GridCards;
