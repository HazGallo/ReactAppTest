import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';
import { ButtonIco } from '../../../components/ButtonIco';
import imagePlaceholder from '../../../assets/image/placeholder-ghost.png';

interface Props {
  onClick: any;
  placeholderSrc?: string;
  file: any;
  isOpen: boolean;
  handleClose: any;
}

export const ImageModal = (props: Props) => {
  const { onClick, placeholderSrc, file, isOpen, handleClose } = props;

  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isSmallScreenSm] = useMediaQuery('(max-width: 520px)');

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="full">
      <ModalOverlay
        bg="blackAlpha.700"
        backdrop-filter="blur(5px)"
        opacity={1}
        w="full"
        h="full"
      />
      <ModalContent bg="transparent">
        <ModalBody>
          <Box
            position="fixed"
            top={0}
            left={0}
            w="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={onClick}
          >
            <Box
              position="absolute"
              top={['5', '25px']}
              right={['5', '25px']}
              zIndex={2}
            >
              <ButtonIco
                aria-label={'Button-Close'}
                typeIcon={'IconClose'}
                sizeName={isSmallScreen ? 'md' : 'lg'} //fixed
                onClick={handleClose}
                backgroundType="UncroppedOption"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              position="relative"
              overflow="hidden"
              zIndex={1}
              sx={
                isSmallScreenSm
                  ? {
                      width: 'calc(100% - 40px)',
                      height: 'calc(100% - 140px)',
                    }
                  : isSmallScreen
                  ? {
                      width: 'calc(100% - 140px)',
                      height: 'calc(100% - 140px)',
                    }
                  : {
                      width: 'calc(100% - 180px)',
                      height: 'calc(100% - 180px)',
                    }
              }
            >
              <Image
                src={
                  file
                    ? URL.createObjectURL(file)
                    : placeholderSrc
                    ? placeholderSrc
                    : imagePlaceholder
                }
                borderRadius={'8px'}
                objectFit="contain"
                maxHeight="100%"
                maxWidth="100%"
              />
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
