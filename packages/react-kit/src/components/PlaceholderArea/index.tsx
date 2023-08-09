import { Box, Text, Heading, useMediaQuery, Flex } from '@chakra-ui/react';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';
import { Ico } from '../Ico';

interface Props {
  title: string;
  description: string;
  typeIcon?: types | noIcoType;
  children?: any;
}

export const PlaceholderArea = (props: Props) => {
  const { description, title, children, typeIcon } = props;

  const x = IconsTypes.find((x) => x.type === typeIcon);

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Box
      w="full"
      height="calc(100vh - 340px)"
      borderRadius={'8px'}
      bg={'compBackgroundFilled'}
      color={'txTertiary'}
      _dark={{
        color: 'neWhite.500',
      }}
      px={['50px', '50px']}
      py={['100px', '160px']}
      overflow="hidden"
    >
      <Flex
        justifyContent={'center'}
        alignItems="center"
        flexDir="column"
        h="full"
        w="full"
      >
        {x?.icon && x?.icon !== 'noIco' && (
          <Ico icon={x?.icon} sizeName={adaptedSizeSm ? 'lg' : 'xl'} />
        )}
        <Text
          fontSize={['14px', '30px']}
          mb="15px"
          fontWeight="bold"
          letterSpacing="-0.75px"
          textAlign={'center'}
        >
          {title}
        </Text>

        <Text
          textStyle={['xs', 'md']}
          fontWeight="normal"
          letterSpacing="0px"
          textAlign={'center'}
        >
          {description}
        </Text>

        {children && <Box mt="25px">{children}</Box>}
      </Flex>
    </Box>
  );
};
