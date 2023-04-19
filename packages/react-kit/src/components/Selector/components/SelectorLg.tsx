import { useState, useRef, useEffect } from 'react';
import { Box, BoxProps, Heading, Icon, Text } from '@chakra-ui/react';
import { Ico } from '../../Ico';
import { IconWarningMark } from '../../../assets/customIcons';

interface Props extends BoxProps {
  icon?: any;
  title: string;
  description?: string;
  disabled: boolean;
  warning: boolean;
  isSelected?: boolean;
  onClick?: () => void; 
}

export const SelectorLg = (props: Props) => {
  const { onClick, isSelected, disabled, warning, title, description, icon, ...rest } = props;

  const titleRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [titleLines, setTitleLines] = useState(1);

  useEffect(() => {
    const element = titleRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
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
  }, [titleLines, titleRef]);

  return (
    <Box height="195px" width="172px" position="relative">
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
        onClick={onClick}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {icon ? (
          <Box marginBottom="2px">
            <Ico icon={icon} sizeName="md" />
          </Box>
        ) : (
          <></>
        )}

        <Heading
          marginTop="4px"
          ref={titleRef}
          w="122px"
          textAlign="center"
          size="md"
          marginBottom="10px"
          sx={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          noOfLines={2}
        >
          {title}
        </Heading>
        <Text
          textAlign="center"
          textStyle="md"
          letterSpacing="-0.35px"
          w="122px"
          sx={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          noOfLines={titleLines > 1 ? 2 : 3}
        >
          {description}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="0.5em"
        color={disabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: disabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'0.1em'}
      >
        {warning ? <Icon as={IconWarningMark} w="10px" h="10px" /> : <></>}
      </Box>
    </Box>
  );
};
