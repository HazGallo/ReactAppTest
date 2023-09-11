import { Box, IconButton, Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { types, IconsTypes } from '../../shared/iconsTypes/icons';

export interface ButtonIconProps {
  typeIcon: types;
  isClicked: boolean;
  isDisabledButton: boolean;
  sizeButton: 'xl' | 'lg' | 'md' | 'sm';
}

export const ButtonIcon = ({
  typeIcon,
  isClicked,
  isDisabledButton,
  sizeButton,
}: ButtonIconProps) => {
  const y = IconsTypes.find((x) => x.type === typeIcon);

  const [isActive, setIsActive] = useState(isClicked);

  const handleButtonIconClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(isClicked);
  }, [isClicked]);

  const [isDisabled, setIsDisable] = useState(isDisabledButton);

  const handleButtonIconDisabled = () => {
    setIsDisable(!isDisabled);
  };

  useEffect(() => {
    setIsDisable(isDisabledButton);
  }, [isDisabledButton]);

  return (
    <Box>
      <IconButton
        _hover={
          isDisabledButton
            ? { filter: '', color: '' }
            : { filter: 'brightness(90%)', color: 'gray' }
        }
        outline={isDisabled ? '' : isActive ? '3px solid' : ''}
        outlineColor={isActive ? 'gray.200' : ''}
        color={isActive ? 'neAccent.500' : ''}
        onClick={handleButtonIconClick}
        isDisabled={isDisabledButton}
        w={
          sizeButton === 'xl'
            ? '60px'
            : sizeButton === 'lg'
            ? '50px'
            : sizeButton === 'md'
            ? '40px'
            : sizeButton === 'sm'
            ? '30px'
            : '60px'
        }
        h={
          sizeButton === 'xl'
            ? '60px'
            : sizeButton === 'lg'
            ? '50px'
            : sizeButton === 'md'
            ? '40px'
            : sizeButton === 'sm'
            ? '30px'
            : '60px'
        }
        aria-label="Search database"
        bg={'cdBackground'}
        icon={
          <Icon
            fontSize={
              sizeButton === 'xl'
                ? '50px'
                : sizeButton === 'lg'
                ? '40px'
                : sizeButton === 'md'
                ? '30px'
                : sizeButton === 'sm'
                ? '20px'
                : '60px'
            }
            as={y?.icon}
          />
        }
      />
    </Box>
  );
};
