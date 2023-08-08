import { useState } from 'react';
import { motion } from 'framer-motion';
import { Divider, Box, Text, Heading, Icon } from '@chakra-ui/react';

import { Switch } from '../Switch';
import { TextEditable } from '../TextEditable';
import { PLACEHOLDER_TEXTAREA } from '../../shared/constants';
import { IconWarningMark } from '../../assets/customIcons';
import { SelectorIcon } from './components/SelectorIcon';

interface contentData {
  title: string;
  isMenuItem?: boolean;
  icon?: any;
}

interface Props {
  dataMenu: contentData[];
  isDisabled?: boolean;
  checked?: boolean;
  children?: any;
  placeholder?: string;
  warning?: boolean;
  onClick?: any;
  valueText?: string;
  valueHeading?: string;
  readOnly?: boolean;
}

export const ModuleSelector = (props: Props) => {
  const {
    isDisabled,
    children,
    placeholder,
    warning,
    onClick,
    dataMenu,
    valueHeading,
    valueText,
    readOnly,
  } = props;

  const [valueHeding, setValueHeading] = useState(valueHeading);
  const [value, setValue] = useState(valueText);
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    if (!isDisabled) {
      setChecked(!checked);
    }
  };

  const onChangeFuncHeading = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValueHeading(event.target.value);
  };

  const onChangeFunc = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <Box
      h="full"
      w="full"
      borderRadius="8px"
      border="2px"
      borderColor={
        isDisabled
          ? checked
            ? 'compBorderSelected'
            : 'compBorderDisabled'
          : checked
          ? 'compBorderSelected'
          : 'compBorderRest'
      }
      color={isDisabled ? 'txTertiary' : checked ? 'txPrimary' : 'txPrimary'}
      background={
        isDisabled
          ? checked
            ? 'whiteAlpha.100'
            : 'compBackgroundFilledDisabled'
          : checked
          ? 'whiteAlpha.100'
          : 'compBackgroundFilled'
      }
      _hover={{
        background: isDisabled
          ? ''
          : checked
          ? ''
          : 'compBackgroundFilledHover',
        color: isDisabled ? 'none' : checked ? '' : 'txPrimaryHover',
        borderColor: isDisabled
          ? checked
            ? ''
            : 'compBorderDisabled'
          : checked
          ? ''
          : 'compBackgroundRest',
        transition: '.3 ease',
      }}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      position="relative"
      pr="28px"
      pl="30px"
      py="28px"
      display="flex"
      flexDir="column"
      justifyContent={'center'}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        h="60px"
        w="full"
      >
        <Box display="flex" alignItems="center" width={'full'}>
          <SelectorIcon
            dataMenu={dataMenu}
            isDisabled={isDisabled}
            checked={checked}
            warning={warning}
            readOnly={readOnly}
          />
          <Box
            h="full"
            width={'calc(100% - 10em)'}
            display="flex"
            flexDir={'column'}
            alignContent={'flex-start'}
            userSelect={isDisabled || readOnly ? 'none' : 'auto'}
          >
            <Box
              display="flex"
              alignItems={'flex-start'}
              width={'auto'}
              h="30px"
              mt="25px"
            >
              <TextEditable
                hasError={false}
                readOnly={isDisabled || readOnly ? true : false}
                errorMessage="error message"
                maxRows={1}
                sizesType={'sm'}
                setValue={setValueHeading}
                value={valueHeding}
                onChange={onChangeFuncHeading}
                placeholder={placeholder}
              >
                <Heading
                  size="sm"
                  noOfLines={1}
                  lineHeight="normal"
                  color={
                    isDisabled
                      ? 'txTertiary'
                      : checked
                      ? 'txPrimary'
                      : 'txPrimary'
                  }
                >
                  {valueHeding
                    ? valueHeding
                    : placeholder === ''
                    ? PLACEHOLDER_TEXTAREA
                    : placeholder}
                </Heading>
              </TextEditable>
            </Box>

            <Box
              display="flex"
              alignItems={'flex-start'}
              mt="5px"
              width={'auto'}
            >
              <TextEditable
                hasError={false}
                readOnly={isDisabled || readOnly ? true : false}
                errorMessage="error message"
                maxRows={1}
                sizesType={'md'}
                setValue={setValue}
                value={value}
                onChange={onChangeFunc}
                placeholder={placeholder}
              >
                <Text
                  textStyle="md"
                  noOfLines={1}
                  lineHeight="normal"
                  color={
                    isDisabled
                      ? 'txTertiary'
                      : checked
                      ? 'txPrimary'
                      : 'txPrimary'
                  }
                >
                  {value
                    ? value
                    : placeholder === ''
                    ? PLACEHOLDER_TEXTAREA
                    : placeholder}
                </Text>
              </TextEditable>
            </Box>
          </Box>
        </Box>

        <Box position={'absolute'} right={0} mr="26px">
          <Switch
            sizes={'md'}
            isDisabled={isDisabled}
            onClick={handleToggle}
            checked={checked}
          />
        </Box>

        <Box
          position="absolute"
          right={'8px'}
          color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
          _dark={{
            color: isDisabled ? 'stWarning.300' : 'stWarning.400',
          }}
          top={'2px'}
          zIndex={3}
        >
          {warning ? <Icon as={IconWarningMark} w="9px" h="9px" /> : <></>}
        </Box>
      </Box>
      <Box
        width={'full'}
        h="full"
        transition=".3s ease-in-out"
        mt={checked && children ? '30px' : ''}
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: checked && children ? 'auto' : 0,
            opacity: checked && children ? 1 : 0,
          }}
          transition={{ duration: checked && children ? 0.1 : 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          {checked && children && (
            <>
              {children && <Divider borderColor="neGrey.500" />}
              {children}
            </>
          )}
        </motion.div>
      </Box>

      <Box
        position="absolute"
        width="30px"
        left={0}
        top={0}
        height="100%"
        onClick={handleToggle}
      ></Box>
      <Box
        position="absolute"
        width="30px"
        right={0}
        top={0}
        height="100%"
        onClick={handleToggle}
      ></Box>

      <Box
        position="absolute"
        width="full"
        left={0}
        top={0}
        height="30px"
        onClick={handleToggle}
      ></Box>
      <Box
        position="absolute"
        width="full"
        left={0}
        bottom={0}
        height="30px"
        onClick={handleToggle}
      ></Box>
    </Box>
  );
};
