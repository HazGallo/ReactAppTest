import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Box, CheckboxProps, Icon } from '@chakra-ui/react';
import { IconCheck } from '../../assets/customIcons';

interface Props extends CheckboxProps {
  checked: boolean;
  isDisabled: boolean;
}

export const InputCheckbox = ({ checked, isDisabled, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const changeIsChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Box
      width="24px"
      height="24px"
      borderRadius="4px"
      border="2px"
      background={isDisabled ? 'neGrey.500' : isChecked ? 'neAccent.500' : ''}
      color={'neWhite.500'}
      borderColor={
        isDisabled
          ? 'neGrey.500'
          : isChecked
          ? 'neAccent.500'
          : 'blackAlpha.300'
      }
      _hover={
        isDisabled
          ? {}
          : {
              borderColor: isChecked ? 'neAccent.400' : 'blackAlpha.300',
              background: isChecked ? 'neAccent.400' : 'blackAlpha.50',
              transition: '.2 ease',
            }
      }
      _dark={{
        background: isDisabled
          ? 'neGrey.500'
          : isChecked
          ? 'neAccent.400'
          : 'blackAlpha.300',
        borderColor: isDisabled
          ? 'neGrey.500'
          : isChecked
          ? 'neAccent.400'
          : 'blackAlpha.50',
        color: 'neWhite.500',
        _hover: {
          background: isDisabled
            ? ''
            : isChecked
            ? 'neAccent.500'
            : 'blackAlpha.300',
          borderColor: isDisabled
            ? ''
            : isChecked
            ? 'neAccent.500'
            : 'blackAlpha.50',
        },
      }}
      _selection={{
        background: 'none',
        color: 'none',
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={changeIsChecked}
      defaultChecked
      {...rest}
    >
      {isChecked && !isDisabled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', alignItems: 'center' }} // Añade estas líneas
        >
          <Icon as={IconCheck} width="16px" height="16px" />
        </motion.div>
      )}
    </Box>
  );
};
