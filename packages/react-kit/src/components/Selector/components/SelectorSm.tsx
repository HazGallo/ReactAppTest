import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IconWarningMark } from '../../../assets/customIcons';
import { Ico } from '../../Ico';

interface Props {
  icon?: any;
  title: string;
  disabled: boolean;
  warning: boolean;
}

export const SelectorSm = (props: Props) => {
  const { disabled, warning, title, icon } = props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Box height="40px" width="full" position="relative">
      <Box
        borderRadius="8px"
        color={
          disabled ? 'bgGreyIcon' : isSelected ? 'neAccent.500' : 'neBlack'
        }
        background={
          disabled
            ? 'compBackgroundHover'
            : isSelected
            ? 'compBackgroundHover'
            : 'compBackgroundHover'
        }
        _dark={{
          color: disabled
            ? 'neGrey.500'
            : isSelected
            ? 'neAccent.400'
            : 'neBlack',
        }}
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        _hover={{
          background: disabled
            ? 'compBackgroundHover'
            : 'compBackgroundFilledHover',
          transition: '.3 ease',
        }}
        width="full"
        height="full"
        onClick={() => setIsSelected((prev) => !prev)}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {icon ? (
          <>
            <Box marginLeft="10px" marginTop="6px">
              <Ico icon={icon} sizeName="sm" />
            </Box>
            <Text
              mr="15px"
              ml="5px"
              textAlign="center"
              textStyle="sm"
              letterSpacing="0px"
              sx={{
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
            >
              {title}
            </Text>
          </>
        ) : (
          <Text
            mx="15px"
            textAlign="center"
            textStyle="sm"
            letterSpacing="0px"
            sx={{
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
          >
            {title}
          </Text>
        )}
      </Box>
      <Box
        position="absolute"
        right="0.3em"
        color={disabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: disabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'-0.2em'}
      >
        {warning ? <Icon as={IconWarningMark} w="8px" h="8px" /> : <></>}
      </Box>
    </Box>
  );
};
