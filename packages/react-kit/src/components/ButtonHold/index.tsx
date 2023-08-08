import {
  Box,
  ButtonProps,
  Icon,
  Text,
  Button as CustomButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { IconWarningMark } from '../../assets/customIcons';
import { Ico } from '../Ico';
import { TypesSize } from './types/buttonTypes';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';

interface Props extends ButtonProps {
  isDisabled?: boolean;
  warning?: boolean;
  cta: string;
  hold: string;
  confirmation: string;
  sizeName: 'md' | 'lg';
  iconCta?: types | noIcoType;
  iconHold?: types | noIcoType;
  iconConfirmation?: types | noIcoType;
}

export const ButtonHold: React.FC<Props> = (props: Props) => {
  const {
    isDisabled,
    sizeName,
    cta,
    hold,
    confirmation,
    warning,
    iconConfirmation,
    iconCta,
    iconHold,
    ...rest
  } = props;

  const [progress, setProgress] = useState(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isComponentActive, setIsComponentActive] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showCustomButton, setShowCustomButton] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const y = TypesSize.find((x) => x.sizeName === sizeName);

  const IcoCta = IconsTypes.find((x) => x.type === iconCta);
  const IcoHold = IconsTypes.find((x) => x.type === iconHold);
  const IcoConfirmation = IconsTypes.find((x) => x.type === iconConfirmation);

  const handleButtonPress = () => {
    if (!isDisabled) {
      setIsButtonPressed(true);
      timerRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            clearInterval(timerRef.current!);
          }
          return newProgress;
        });
      }, 20);
    }
  };

  const handleButtonRelease = () => {
    setIsButtonPressed(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      if (progress < 100) {
        const decrementTimer = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = 0;
            if (newProgress <= 0) {
              clearInterval(decrementTimer);
              setIsComponentActive(false);
            }
            return newProgress;
          });
        }, 1);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && !isComponentActive) {
      const timeout = setTimeout(() => {
        setIsComponentActive(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, isComponentActive]);

  useEffect(() => {
    if (isComponentActive) {
      const timeout = setTimeout(() => {
        setShowTitle(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [isComponentActive]);

  useEffect(() => {
    if (showTitle) {
      const timeout = setTimeout(() => {
        setShowCustomButton(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [showTitle]);

  return (
    <Box w="full" h={y?.background} position={'relative'}>
      {isComponentActive && (
        <Box
          position="absolute"
          left={0}
          top={0}
          w="full"
          h="full"
          display={'flex'}
          justifyContent="center"
          alignContent={'center'}
        >
          <CustomButton
            position="relative"
            overflow={'hidden'}
            width="full"
            h="full"
            borderWidth="2px"
            borderColor={'compBorderSelected'}
            color={'txHighlight'}
            background={'neWhite.500'}
            _hover={{
              color: 'txHighlightHover',
              borderColor: 'compBorderSelectedHover',
              transition: '.3 ease',
            }}
            _active={{
              bg: '',
            }}
            cursor={'pointer'}
            borderRadius="8px"
            as={motion.div}
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            zIndex="5"
          >
            <motion.div
              initial={{ scale: 0.1 }}
              animate={{ scale: showTitle ? 1 : 0.1 }}
              transition={{ duration: 0.1 }}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                h="full"
                w={'100%'}
                display={'flex'}
                alignItems="center"
                justifyContent={'center'}
              >
                {IcoConfirmation?.icon && IcoConfirmation?.icon !== 'noIco' && (
                  <Ico icon={IcoConfirmation?.icon} sizeName={'sm'} mr="10px" />
                )}
                <Text
                  textStyle="textButton"
                  textTransform="uppercase"
                  textAlign="center"
                  cursor={isDisabled ? 'not-allowed' : 'pointer'}
                  isTruncated
                >
                  {confirmation}
                </Text>
              </Box>
            </motion.div>
          </CustomButton>
        </Box>
      )}
      <Box
        position="absolute"
        left={0}
        opacity={showCustomButton ? 0 : 1}
        top={0}
        w="full"
        h="full"
        display={'flex'}
        justifyContent="center"
        alignContent={'center'}
      >
        <CustomButton
          position="relative"
          overflow="hidden"
          width="full"
          h="full"
          borderRadius={'8px'}
          onMouseDown={handleButtonPress}
          onMouseUp={handleButtonRelease}
          onMouseLeave={handleButtonRelease}
          onTouchStart={handleButtonPress}
          onTouchEnd={handleButtonRelease}
          onTouchCancel={handleButtonRelease}
          color={isDisabled ? 'txTertiary' : 'neWhite.500'}
          background={
            isDisabled ? 'compBackgroundFilledDisabled' : 'neAccent.500'
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
            background: isDisabled ? '' : progress <= 0 ? 'neAccent.400' : '',
            transition: '.3 ease',
          }}
          _active={{
            bg: '',
          }}
          zIndex={4}
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          {...rest}
        >
          {progress < 100 && (
            <Box
              w={'100%'}
              h="full"
              display={'flex'}
              alignItems="center"
              justifyContent={'center'}
              zIndex={'2'}
            >
              {IcoCta?.icon && IcoCta?.icon !== 'noIco' && progress <= 0 && (
                <Ico icon={IcoCta?.icon} sizeName={'sm'} mr="10px" />
              )}
              {IcoHold?.icon && IcoHold?.icon !== 'noIco' && progress > 0 && (
                <Ico icon={IcoHold?.icon} sizeName={'sm'} mr="10px" />
              )}
              <Text
                textStyle="textButton"
                textTransform="uppercase"
                textAlign={'center'}
                cursor={isDisabled ? 'not-allowed' : 'pointer'}
                isTruncated
              >
                {isDisabled ? cta : progress <= 0 ? cta : hold}
              </Text>
            </Box>
          )}

          <Box
            id="hoverBox"
            zIndex={'1'}
            style={{
              borderRadius: '8px',
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${progress}%`,
              height: '100%',
              opacity: 0.5,
            }}
            bg="neAccent.700"
          />
        </CustomButton>
      </Box>
      <Box
        position="absolute"
        right={'0.7em'}
        top={'-0.1em'}
        color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: isDisabled ? 'stWarning.300' : 'stWarning.400',
        }}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        zIndex="5"
      >
        {warning ? <Icon as={IconWarningMark} w={'9px'} h={'9px'} /> : <></>}
      </Box>
    </Box>
  );
};
