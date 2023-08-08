import { useEffect, useState } from 'react';
import { Box, BoxProps, Flex, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Badge } from '../../../../Badge';
import { contentType } from '../../../../Badge/ContentBadge';
import { pathType } from '../../../../Badge/PathBadge';

import { ItemCardSkeleton } from './ItemCardSkeleton';

import '../../../../../styles/styles.css';

import { InputCheckbox } from '../../../../InputCheckbox';
import { badgeTypes } from './types/backgroundTypes';

interface Props extends BoxProps {
  type: contentType | pathType;
  children?: any;
  checked?: boolean;
  coverImage: string;
  placeholderSrc: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
  onClickDrawer?: any;
  newCard?: boolean;
}

export const BodyCard = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    skeleton,
    checked = false,
    children,
    coverImage,
    placeholderSrc,
    type,
    sizeCard,
    onClickDrawer,
    newCard,
    ...rest
  } = props;

  const backgroundImage = badgeTypes.find((x) => x.type === type);

  const [creationCard, setCreationCard] = useState(false);

  useEffect(() => {
    if (newCard) {
      setCreationCard(newCard);
      setTimeout(() => {
        setCreationCard(false);
      }, 3000);
    }
  }, [newCard]);

  const changeIsChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const over = () => {
    setIsVisible(true);
  };
  const out = () => {
    setIsVisible(false);
  };

  return (
    <>
      {skeleton ? (
        <Box
          overflow="hidden"
          bg="neGrey.50"
          _dark={{
            bg: 'whiteAlpha.50',
          }}
          borderRadius="8px"
          width={sizeCard == 'md' ? ['140px', '232px'] : '140px'}
          height={sizeCard == 'md' ? ['220px', '364px'] : '220px'}
          boxShadow="0px 3px 6px"
          color="bgShadow"
          {...rest}
        >
          <ItemCardSkeleton
            type={type}
            sizeCard={sizeCard}
            skeleton={skeleton}
            children={children}
          />
        </Box>
      ) : (
        <Box
          overflow="hidden"
          borderRadius="8px"
          width={sizeCard == 'md' ? ['140px', '232px'] : '140px'}
          height={sizeCard == 'md' ? ['220px', '364px'] : '220px'}
          outline={isChecked || creationCard ? '3px solid' : ''}
          outlineColor={isChecked || creationCard ? 'neAccent.500' : ''}
          _dark={{
            outline: isChecked || creationCard ? '3px solid' : '',
            outlineColor: isChecked || creationCard ? 'neAccent.400' : '',
          }}
          boxShadow="0px 3px 6px"
          color="bgShadow"
          onMouseOver={over}
          onMouseOut={out}
          {...rest}
          _selection={{
            background: 'none',
            color: 'none',
          }}
        >
          <Flex
            position="relative"
            height={sizeCard == 'md' ? ['109px', '213px'] : '109px'}
            overflow="hidden"
            userSelect={'none'}
          >
            {newCard && (
              <Box
                position="absolute"
                right="10px"
                top="10px"
                w={sizeCard == 'md' ? ['30px', '40px'] : '30px'}
                h={sizeCard == 'md' ? ['20px', '28px'] : '20px'}
                bg="neAccent.500"
                _dark={{
                  bg: 'neAccent.400',
                }}
                color="neWhite.500"
                zIndex={'50'}
                display="flex"
                justifyContent={'center'}
                alignItems="center"
                borderRadius="full"
                userSelect={'none'}
              >
                <Text textStyle={sizeCard == 'md' ? ['xs', 'sm'] : 'xs'}>
                  NEW!
                </Text>
              </Box>
            )}

            <Box
              position="absolute"
              opacity={isVisible ? '1' : isChecked ? '1' : '0'}
              left="0"
              top="0"
              width="20%"
              onMouseOver={over}
              onMouseOut={out}
              _selection={{
                background: 'none',
                color: 'none',
              }}
              zIndex={isVisible ? '50' : isChecked ? '50' : '0'}
            >
              <Box
                position="relative"
                margin={sizeCard == 'md' ? ['13px', '15px'] : '13px'}
              >
                <InputCheckbox
                  checked={isChecked}
                  isDisabled={false}
                  size="lg"
                  onClick={changeIsChecked}
                />
              </Box>
            </Box>

            <Box
              h={'100%'}
              transition=".2s ease-in-out"
              transform={isVisible ? 'scale(1.04)' : ''}
              sx={{
                filter: 'auto',
                brightness: isVisible ? '83%' : isChecked ? '83%' : '',
                boxSize: 'full',
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex="30"
              _selection={{
                background: 'none',
                color: 'none',
              }}
              onClick={onClickDrawer}
              cursor="pointer"
              bg={backgroundImage?.bg}
            >
              {!creationCard && (
                <Box
                  pointerEvents={'none'}
                  w="100%"
                  h={sizeCard == 'md' ? ['170px', '300px'] : '170px'}
                >
                  <LazyLoadImage
                    className="resetBgSelected lazyImage"
                    height="100%"
                    src={coverImage}
                    width="100%"
                    placeholderSrc={placeholderSrc}
                    alt="Image Alt"
                    effect="blur"
                    delayTime={5000}
                  />
                </Box>
              )}
            </Box>

            <Flex
              zIndex={40}
              position="absolute"
              cursor="default"
              left={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
              bottom={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
              _selection={{
                background: 'none',
                color: 'none',
              }}
            >
              <Box onClick={onClickDrawer}>
                <Badge type={type} size="md" sizeCard={sizeCard} />
              </Box>
            </Flex>
          </Flex>
          <Box
            marginTop={sizeCard == 'md' ? ['-1.5px', '2px'] : '-1.5px'}
            paddingX={sizeCard == 'md' ? ['2', '3.5'] : '2'}
            h="100%"
            cursor={'pointer'}
            onClick={onClickDrawer}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};
