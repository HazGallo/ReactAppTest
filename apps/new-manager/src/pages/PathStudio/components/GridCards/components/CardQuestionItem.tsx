import { Box, useMediaQuery } from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { CardQuestion } from '@iseazy/react-kit';

import { useSettings } from '../../../../../store/settingsStore';
import { Element } from './../interfaces/propertiesCard';

const CardQuestionItem = memo(
  ({ cover }: Element & { isDragging: boolean }) => {
    const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');

    const { cardSize, readonly } = useSettings(
      (state) => ({
        cardSize: state.cardSize,
        readonly: state.readonly,
      }),
      shallow
    );

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
      >
        <CardQuestion
          firstValueBadge="ab"
          secondValueBadge="abcd"
          title={'Customer success'}
          typeStatus="image"
          bg="coAudio"
          skeleton={skeleton}
          coverImage="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
          editableTitle={
            'What are the key elements of building strong and successful customer relationships?'
          }
          errorMessage={'Error Message'}
          hasError={false}
          InfoAndActionBar={'001'}
          minWidth={[
            '140px',
            adaptedSizeSm ? '140px' : cardSize ? '220px' : '140px',
          ]}
          placeholder="title"
          readOnly={readonly}
          sizeCard={adaptedSizeSm ? 'sm' : cardSize ? 'md' : 'sm'}
          width="inherit"
        />
      </Box>
    );
  }
);

export default CardQuestionItem;
