import { useState, useRef, useEffect } from 'react';
import { Box, BoxProps, Heading, Icon, Text } from '@chakra-ui/react';

import { Ico } from '../../Ico';
import { IconWarningMark } from '../../../assets/customIcons';
import { IconsTypes, types, noIcoType } from '../../../shared/iconsTypes/icons';

interface Props extends BoxProps {
  description?: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  title: string;
  typeIcon?: types | noIcoType; //It is optional, but for as long as it is not, until they send the new icons
  warning?: boolean;
}

export const SelectorBig = (props: Props) => {
  const {
    onClick,
    isSelected,
    isDisabled,
    warning,
    title,
    description,
    typeIcon,
    ...rest
  } = props;

  const y = IconsTypes.find((x) => x.type === typeIcon);

  const titleRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [titleLines, setTitleLines] = useState(1);

  useEffect(() => {
    const element = titleRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
      if (titleRef.current === null) return;

      const lineHeight = parseFloat(
        getComputedStyle(titleRef.current).lineHeight
      );
      const titleHeight = titleRef.current.offsetHeight;
      setTitleLines(Math.round(titleHeight / lineHeight));
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [titleRef.current]);

  return (
    <Box height="195px" width="215px" position="relative">
      <Box
        borderRadius="8px"
        border="2px"
        borderColor={
          isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelected'
            : 'compBorderRest'
        }
        color={
          isDisabled ? 'txTertiary' : isSelected ? 'txHighlight' : 'txPrimary'
        }
        background={
          isDisabled
            ? 'compBackgroundFilledDisabled'
            : isSelected
            ? 'compBackgroundRest'
            : 'compBackgroundFilled'
        }
        _isdisabled={{
          color: 'bgGreyIcon',
          background: 'transparent',
          cursor: 'not-allowed',
          _hover: {
            color: 'none',
            background: 'transparent',
          },
          _dark: {
            color: 'neGrey.500',
          },
        }}
        _hover={{
          background: isDisabled
            ? ''
            : isSelected
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',

          color: isDisabled
            ? 'none'
            : isSelected
            ? 'txHighlightHover'
            : 'txPrimaryHover',
          borderColor: isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelectedHover'
            : 'compBackgroundRest',

          transition: '.3 ease',
        }}
        sx={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        _selection={{
          background: 'none',
          color: 'none',
        }}
        width="full"
        height="full"
        onClick={onClick}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {y?.icon && y?.icon !== 'noIco' && (
          <Box marginBottom="2px">
            <Ico icon={y?.icon} sizeName="md" />
          </Box>
        )}

        <Heading
          marginTop="4px"
          ref={titleRef}
          w="169px"
          textAlign="center"
          size="md"
          marginBottom="10px"
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          _selection={{
            background: 'none',
            color: 'none',
          }}
          noOfLines={2}
        >
          {title}
        </Heading>
        <Text
          textAlign="center"
          textStyle="md"
          letterSpacing="-0.35px"
          w="169px"
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          _selection={{
            background: 'none',
            color: 'none',
          }}
          noOfLines={titleLines > 1 ? 2 : 3}
        >
          {description}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="0.5em"
        color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: isDisabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'0.1em'}
      >
        {warning && <Icon as={IconWarningMark} w="10px" h="10px" />}
      </Box>
    </Box>
  );
};
