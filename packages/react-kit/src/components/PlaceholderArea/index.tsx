import { Box, Text, Heading, useMediaQuery } from '@chakra-ui/react';
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
        display="flex"
        justifyContent={'center'}
        alignItems="center"
        flexDir="column"
        color={'txTertiary'}
        _dark={{
          color: "neWhite.500"
        }}
      >
        {x?.icon && x?.icon !== 'noIco' && (
          <Ico icon={x?.icon} sizeName={adaptedSizeSm ? 'lg' : 'xl'} />
        )}
        <Text
          fontSize={['20px', '30px']}
          mb="15px"
          fontWeight="bold"
          letterSpacing="-0.75px"
          textAlign={'center'}
        >
          {title}
        </Text>

        <Text
          fontSize={['10px', '14px']}
          fontWeight="normal"
          letterSpacing="0px"
          textAlign={'center'}
        >
          {description}
        </Text>

        {children && <Box mt="25px">{children}</Box>}
      </Box>
  );
};
