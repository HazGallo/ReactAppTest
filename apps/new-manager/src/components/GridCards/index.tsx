import { useEffect, useMemo, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { Box, useMediaQuery } from '@chakra-ui/react';

import { CardItem } from '@iseazy/react-kit';

import { DataCardItem } from './interfaces/propertiesCard';
import { getRandomObject } from '../../data/dataCard';

import { useSettings } from '../../store/settingsStore';

const GridCards = ({
  description,
  isDragging,
  title,
  text,
  type,
  typeStatus,
  uid,
  isOpen,
  onClose,
  onOpen,
}: DataCardItem & { isDragging: boolean }) => {
  const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
  const [isLoaded, setIsLoaded] = useState(true);
  const { cardSize, setIsInfoCardDrawer, readonly, setVideo } = useSettings(
    (state) => ({
      cardSize: state.cardSize,
      setIsInfoCardDrawer: state.setIsInfoCardDrawer,
      readonly: state.readonly,
      setVideo: state.setVideo,
    }),
    shallow
  );

  const memoizedProps = useMemo(
    () => ({
      typeStatus,
      text,
      title,
      uid,
      description,
    }),
    [typeStatus, text, title, uid, description]
  );

  const [randomObject, setRandomObject] = useState(() => getRandomObject());
  // const { data, error, isError, isLoading, getVideoById } = useGetVideo();
  const [showDrawer, setShowDrawer] = useState(false);

  const handleClickCard = (event: any) => {
    if (event.detail === 1 && !isDragging) {
      setIsInfoCardDrawer(memoizedProps);
      // getVideoById(uid);
      setShowDrawer(onOpen);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setVideo(data);
  //   }
  // }, [data]);

  useEffect(() => {
    setShowDrawer(showDrawer);
  }, [onOpen]);

  return (
    <>
      <Box
        padding="0 0.5em"
        transition="all ease-in-out .2s"
        _hover={{
          transform: 'scale(1.04)',
          transition: '.3s ease',
          cursor: 'pointer',
        }}
      >
        <CardItem
          onClickDrawer={handleClickCard}
          width="inherit"
          placeholderSrc={randomObject.placeholderSrc}
          coverImage={randomObject.coverimage}
          checked={randomObject.checked}
          sizeCard={adaptedSizeSm ? 'sm' : cardSize ? 'md' : 'sm'}
          typeStatus={randomObject.typeStatus}
          typeBadge={randomObject.type}
          InfoAndActionBar={randomObject.text}
          editableTitle={title}
          placeholder="title"
          date="april 10, 2002 03:24:00"
          skeleton={isLoaded}
          errorMessage={'Error Message'}
          hasError={false}
          readOnly={readonly}
          minWidth={[
            'inherit',
            adaptedSizeSm ? '140px' : cardSize ? '220px' : '140px',
          ]}
        />
      </Box>
    </>
  );
};

export default GridCards;
