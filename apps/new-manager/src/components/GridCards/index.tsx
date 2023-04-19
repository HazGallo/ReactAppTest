import { Box, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { sliceInformation } from '../../store/sliceInformation';
import { DrawerParent } from '../DrawerParent/DrawerParent';
import { CardItem } from '../../../../../packages/react-kit/src/components/CardItem/index';
import { propertiesCard } from './interfaces/propertiesCard';

const GridCards = ({
  checked,
  coverimage,
  type,
  typeStatus,
  text,
  placeholderSrc,
  title
}: propertiesCard) => {
  const [adaptedSizeSm] = useMediaQuery('(max-width: 768px)');
  const [isLoaded, setIsLoaded] = useState(true);
  const { setIsOpen, cardSize, setIsInfoCardDrawer, readonly } = sliceInformation();

  const OnclickCardDrawer = (event: any) => {
    if (event.detail === 2) {
      setIsInfoCardDrawer({
        coverimage,
        typeStatus,
        text,
        title
      });
      setIsOpen();
    }
  };

  setTimeout(function () {
    setIsLoaded(false);
  }, 5000);

  return (
    <>
      <DrawerParent />
      <Box
        padding="0 0.5em"
        onClick={OnclickCardDrawer}
        transition="all ease-in-out .2s"
        _hover={{
          transform: 'scale(1.04)',
          transition: '.3s ease',
          cursor: 'pointer',
        }}
      >
        <CardItem
          width="inherit"
          minWidth={[
            'inherit',
            adaptedSizeSm ? '140px' : cardSize ? '220px' : '140px',
          ]}
          placeholderSrc={placeholderSrc}
          coverImage={coverimage}
          checked={checked}
          sizeCard={adaptedSizeSm ? 'sm' : cardSize ? 'md' : 'sm'}
          typeStatus={typeStatus}
          typeBadge={type}
          InfoAndActionBar={text}
          editableTitle={title}
          placeholder="title"
          date="april 10, 2002 03:24:00"
          skeleton={isLoaded}
          errorMessage={'Error Message'}
          hasError={false}
          readOnly={readonly}
        />
      </Box>
    </>
  );
};

export default GridCards;
