import { Box, BoxProps, Checkbox, Flex, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Badge } from './Badge';
import { contentType } from './Badge/ContentBadge';
import { pathType } from './Badge/PathBadge';
import { checkBoxCss } from '../../types/checkBox.type';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ItemCardSkeleton } from './ItemCardSkeleton';
import { CustomIcon } from './CustomIcon';


interface Props extends BoxProps {
  type: contentType | pathType;
  children?: any;
  checked?: boolean;
  coverImage: string;
  placeholderSrc: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
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
    ...rest
  } = props;

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
          bg="cdBackground"
          overflow="hidden"
          borderRadius="8px"
          width={sizeCard == 'md' ? ['140px', '232px'] : '140px'}
          height={sizeCard == 'md' ? ['220px', '364px'] : '220px'}
          outline={isChecked ? '3px solid' : ''}
          outlineColor={isChecked ? 'neAccent.500' : ''}
          _dark={{
            outline: isChecked ? '3px solid' : '',
            outlineColor: isChecked ? 'neAccent.400' : '',
          }}
          boxShadow="0px 3px 6px"
          color="bgShadow"
          onMouseOver={over}
          onMouseOut={out}
          {...rest}
        >
          <Flex
            position="relative"
            height={sizeCard == 'md' ? ['109px', '213px'] : '109px'}
            overflow="hidden"
          >
            <Box
              position="absolute"
              opacity={isVisible ? '1' : isChecked ? '1' : '0'}
              left="0"
              top="0"
              width="300px"
              onMouseOver={over}
              onMouseOut={out}
              zIndex={isVisible ? '50' : isChecked ? '50' : '0'}
            >
              <Checkbox
                position="relative"
                margin={['3%', '5%']}
                size="lg"
                zIndex={2}
                defaultChecked
                icon={<CustomIcon isChecked={isChecked} />}
                sx={isChecked ? { ...checkBoxCss } : {}}
                isChecked={isChecked}
                onChange={changeIsChecked}
              />
            </Box>
            <Box
              h={sizeCard == 'md' ? ['170px', '300px'] : '170px'}
              transition=".2s ease-in-out"
              transform={isVisible ? 'scale(1.04)' : ''}
              sx={{
                filter: 'auto',
                brightness: isVisible ? '83%' : isChecked ? '83%' : '',
                boxSize: 'full',
              }}
              pointerEvents="none"
              display="flex"
              justifyContent="center"
              marginTop="-35px"
              alignItems="center"
              zIndex="30"
            >
              <LazyLoadImage
                height="100%"
                src={coverImage}
                width="100%"
                placeholderSrc={placeholderSrc}
                alt="Image Alt"
                effect="blur"
                delayTime={5000}
              />
            </Box>
            <Flex
              zIndex={40}
              position="absolute"
              cursor="default"
              left={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
              bottom={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
            >
              <Box>
                <Badge type={type} size="md" sizeCard={sizeCard} />
              </Box>
            </Flex>
          </Flex>
          <Box
            marginTop={sizeCard == 'md' ? ['-1.5px', '2px'] : '-1.5px'}
            paddingX={sizeCard == 'md' ? ['2', '3.5'] : '2'}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};
