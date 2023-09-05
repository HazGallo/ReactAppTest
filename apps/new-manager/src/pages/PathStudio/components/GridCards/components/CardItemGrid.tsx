import { Box, useMediaQuery } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { CardItem } from '@iseazy/react-kit';

import useSectionsStore from 'src/store/useSectionsStore';
import { getRandomObject } from '../../../../../data/dataCard';
import { useSettings } from '../../../../../store/settingsStore';
import { Element } from '../interfaces/propertiesCard';

const CardItemGrid = memo(
  ({
    author_uid,
    cover,
    isDragging,
    onOpen,
    points,
    tags,
    topic_weights,
    translations,
    type,
    uid,
    newCard,
    height,
    typeCard = 'cardItem',
  }: Element & { isDragging: boolean }) => {
    const [randomObject] = useState(() => getRandomObject());
    const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');

    const { updateCardElementSelected } = useSectionsStore(
      (state) => ({
        updateCardElementSelected: state.updateCardElementSelected,
      }),
      shallow
    );
    const { cardSize, readonly } = useSettings(
      (state) => ({
        cardSize: state.cardSize,
        readonly: state.readonly,
      }),
      shallow
    );

    const handleClickCard = (event: any) => {
      console.trace('handleClickCard', { event, isDragging });
      if (event.detail === 1 && !isDragging) {
        updateCardElementSelected({
          author_uid,
          cover,
          points,
          tags,
          topic_weights,
          translations,
          type,
          uid,
          newCard: true,
        });

        onOpen();
      }
    };

    const title = translations[0].title;
    const key = `${uid}-${title}`;

    // Estado para el skeleton
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
      // Configura un timer para cambiar el valor de skeleton
      const timer = setTimeout(() => {
        setSkeleton(false);
      }, 700);

      // Limpia el timer cuando el componente se desmonte
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <Box
        padding="0 0.5em"
        transition="all ease-in-out .1s"
        _hover={{
          transform: 'scale(1.04)',
          transition: 'all ease-in-out .1s',
          cursor: 'pointer',
        }}
        userSelect="none"
        onClick={handleClickCard}
      >
        <CardItem
          key={key}
          skeleton={skeleton}
          checked={randomObject.checked}
          coverImage={cover?.filePath}
          date="april 10, 2002 03:24:00"
          editableTitle={title}
          errorMessage={'Error Message'}
          hasError={false}
          InfoAndActionBar={randomObject.text}
          minWidth={[
            '140px',
            adaptedSizeSm ? '140px' : cardSize ? '220px' : '140px',
          ]}
          newCard={newCard}
          onClickDrawer={handleClickCard}
          placeholder="title"
          placeholderSrc={''}
          readOnly={readonly}
          sizeCard={adaptedSizeSm ? 'sm' : cardSize ? 'md' : 'sm'}
          typeBadge={type.title.toLowerCase()}
          typeStatus={'none'}
          width="inherit"
        />
      </Box>
    );
  }
);

export default CardItemGrid;
