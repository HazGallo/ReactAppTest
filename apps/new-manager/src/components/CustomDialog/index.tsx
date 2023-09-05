import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ButtonIco, Button } from '@iseazy/react-kit';
import React, { useRef, useState, useEffect } from 'react';
import { MdContentCopy } from 'react-icons/md';

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCount: number;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  isOpen,
  onClose,
  selectedCount,
}) => {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const [isSelected, setIsSelected] = useState(false);

  // Mantener el diálogo abierto si selectedCount > 0
  useEffect(() => {
    if (isOpen && selectedCount > 0) {
      cancelRef.current?.focus();
    }
  }, [isOpen, selectedCount]);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent
        position={'fixed'}
        bottom={'0'}
        left={'0'}
        right={'0'}
        maxHeight={'75px'}
        maxWidth={'100%'}
        width={'100%'}
        padding={'0'}
        margin={'0'}
        onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic dentro
      >
        <AlertDialogFooter
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={'1rem'}
        >
          <Button
            formats="fixed"
            label={` ${selectedCount} Selected`}
            sizeName="md"
            variant="tertiary"
            typeIcon="noIco"
          />

          {/* creame un box ocon la siguientes medida, width=800 height=400px */}

          <Flex alignItems="center">
            <Flex gap={2}>
              <Button
                formats="fixed"
                label="SELECT ALL"
                sizeName="md"
                variant="secondary"
                typeIcon="noIco"
              />
              <Box
                width={'1px'}
                background={'blackAlpha.200'}
                height={'2rem'}
                margin={'0 0.5rem'}
              />
              <ButtonIco
                isSelected={isSelected}
                typeIcon="IconDelete"
                type="reset"
                sizeName={'md'}
                aria-label={''}
              />
              <ButtonIco
                isSelected={isSelected}
                icon={MdContentCopy}
                type="submit"
                sizeName={'md'}
                aria-label={''}
                onClick={() => setIsSelected(!isSelected)}
              />
              <Box
                width={'1px'}
                background={'blackAlpha.200'}
                height={'2rem'}
                margin={'0 0.5rem'}
              />
              <ButtonIco
                typeIcon="IconClose"
                type="button"
                sizeName={'md'}
                aria-label={''}
                onClick={onClose}
              />
            </Flex>
          </Flex>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomDialog;
