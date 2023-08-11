import { useCallback, useEffect, useState, memo } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';

import { CardItem, contentType, pathType } from '@iseazy/react-kit';

import useSectionsStore from 'src/store/useSectionsStore';
import { getRandomObject } from '../../../../data/dataCard';
import { useSettings } from '../../../../store/settingsStore';
import usePathListStore from '../../../../store/usePathList';
import { Element } from './interfaces/propertiesCard';
import { useNavigate } from 'react-router-dom';

const GridCards = memo(
  ({ uid, title, language, cover }: Element & { isDragging: boolean }) => {
    const [randomObject] = useState(() => getRandomObject());
    const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();
    const { updateCardSelected } = usePathListStore(
      (state) => ({
        updateCardSelected: state.updateCardSelected,
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

    const handleClickCard = (uid: string) => {
      navigate('/');
      updateCardSelected(uid);
    };

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
        onClick={() => handleClickCard(uid)}
      >
        <CardItem
          checked={randomObject.checked}
          coverImage={cover?.filePath}
          date="april 10, 2002 03:24:00"
          editableTitle={title}
          errorMessage={'Error Message'}
          hasError={false}
          InfoAndActionBar={randomObject.text}
          minWidth={[
            'inherit',
            adaptedSizeSm ? '140px' : cardSize ? '220px' : '140px',
          ]}
          onClickDrawer={() => handleClickCard(uid)}
          placeholder="title"
          placeholderSrc={''}
          readOnly={readonly}
          sizeCard={adaptedSizeSm ? 'sm' : cardSize ? 'md' : 'sm'}
          typeBadge={cover.type.toLowerCase() as contentType | pathType}
          typeStatus={'none'}
          width="inherit"
        />
      </Box>
    );
  }
);

export default GridCards;
