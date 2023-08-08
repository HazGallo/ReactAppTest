import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';

import BadgeQuestion from '../../../../../../src/components/BadgeQuestion';
import '../../../../../styles/styles.css';
import imagePlaceholder from '../../../../../assets/image/placeholder-ghost.png';

interface Props extends BoxProps {
  children?: any;
  coverImage: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
  onClickDrawer?: any;
  firstValueBadge: string;
  secondValueBadge: string;
  bg: string;
}

export const BodyCard = (props: Props) => {
  const {
    skeleton,
    children,
    coverImage,
    sizeCard,
    onClickDrawer,
    firstValueBadge,
    secondValueBadge,
    bg,
    ...rest
  } = props;

  return (
    <Box
      overflow="hidden"
      borderRadius="8px"
      width={sizeCard == 'md' ? ['140px', '232px'] : '140px'}
      height={sizeCard == 'md' ? ['220px', '364px'] : '220px'}
      pos="relative"
      boxShadow="0px 3px 6px"
      color="bgShadow"
      _selection={{
        background: 'none',
        color: 'none',
      }}
      {...rest}
    >
      <Flex
        position="relative"
        width="full"
        height={sizeCard == 'md' ? ['70px', '110px'] : '70px'}
      >
        <Image
          width="full"
          height="full"
          objectFit="cover"
          src={coverImage ? coverImage : imagePlaceholder}
        ></Image>
        <Flex
          zIndex={40}
          position="absolute"
          cursor="default"
          left="0"
          bottom="0"
          padding="54px 121px 12px 14px"
          _selection={{
            background: 'none',
            color: 'none',
          }}
        >
          <Box onClick={onClickDrawer}>
            <BadgeQuestion
              bg={bg}
              sizeCard={sizeCard}
              firstValue={firstValueBadge}
              secondValue={secondValueBadge}
            />
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
  );
};
