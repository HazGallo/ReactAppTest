import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Lottie from 'react-lottie-player';

import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';

import { ActionBarButtons } from './components/ActionBarButtons';
import { ButtonIco } from '../ButtonIco';
import { croppingOptions, styles } from './types/FrameTypes';
import { ErrorMessage } from './components/ErrorMessage';
import { iconTypes, typesContent } from './types/iconTypes';
import { types } from '../../shared/iconsTypes/icons';
import { IconUncropped, IconWarningMark } from '../../assets/customIcons';
import { MessagesErrors } from './validation/ErrorMessages';
import ChakraProgress from './components/ChakraProgress';
import FileHover from '../FileHover';

import { css as localCss } from '@emotion/react';

import imageLoad from './animation/imageload.json';
import imagePlaceholder from '../../assets/image/placeholder-ghost.png';
import { ButtonUncropped } from './components/ButtonUncropped';

interface Props {
  maxFiles?: number;
  maxSize?: number;
  type?: typesContent;
  hasError: boolean;
  warning: boolean;
  errorMessage: string;
  onDrop: (arg0: any) => void;
  onChange: (event: any) => void;
  onChangeProgress: (progressChange: boolean) => void;
  progressChange?: boolean;
  isDisabled: boolean;
  sizeMenu?: 'sm' | 'md';
  onSelect: (file: File) => void;
  placeholderSrc?: string;
  readonly?: boolean;
  dragAndDrop?: boolean;
}

export const ImageSelector = (props: Props) => {
  const {
    type,
    errorMessage,
    warning,
    hasError,
    sizeMenu,
    isDisabled,
    onChange,
    progressChange = true,
    onSelect,
    placeholderSrc,
    readonly,
    dragAndDrop = true,
  } = props;
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState<any>();
  const [sizeFile, setSizeFile] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>(errorMessage);
  const [isDragging, setIsDragging] = useState(false);
  const [showcomponent, setShowcomponent] = useState(false);
  const [showProgress, setshowProgress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const x = iconTypes.find((x) => x.type === type);

  //para abir el menu:
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleDragEnter = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      onChange(acceptedFiles[0]);
      setProgress(0);
      setIsDragging(false);
      onSelect(acceptedFiles[0]);
    },
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    multiple: false,
  });

  useEffect(() => {
    setError(false);
  }, [type, progress]);

  useEffect(() => {
    setError(hasError);
  }, [hasError]);

  useEffect(() => {
    setMessage(errorMessage);
  }, [errorMessage]);

  useEffect(() => {
    handleFileChange(file);
  }, [file]);

  const handleFileChange = (event: any) => {
    setshowProgress(true);
    if (event) {
      const fileExtension = event?.name.split('.').pop()?.toLowerCase();
      if (type && fileExtension) {
        if (!MessagesErrors[type].allowedExtensions.includes(fileExtension)) {
          setError(true);
          setMessage(MessagesErrors[type].message);
          setshowProgress(false);
          setFile(null);
          return;
        }
      }

      const fileSize = event.size;
      const chunkSize = 1024 * 1024;
      const chunks = Math.ceil(fileSize / chunkSize);
      let currentChunk = 0;

      const fileSizeInMB = fileSize ? fileSize / chunkSize : 0;
      setSizeFile(fileSizeInMB.toFixed(2));
      setFileName(file?.name);
      const reader = new FileReader();

      const MIN_LOAD_TIME = 70; // Duración mínima de carga en segundos
      const delay = fileSizeInMB < 20 ? (MIN_LOAD_TIME * 1000) / 100 : 10; // Cálculo del valor de retardo

      reader.onloadend = () => {
        currentChunk++;
        setTimeout(() => {
          const x = (currentChunk / chunks) * 100;
          setProgress(x);
        }, 1000);
        if (currentChunk < chunks) {
          setTimeout(() => {
            loadNext();
          }, delay);
        }
      };
      // setshowProgress(false)

      const loadNext = () => {
        const start = currentChunk * chunkSize;
        const end = Math.min(start + chunkSize, fileSize);
        const blob = event.slice(start, end);
        reader.readAsArrayBuffer(blob);
      };

      loadNext();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (progress === 100 && progressChange) {
        setTimeout(() => {
          setShowcomponent(true);
        }, 210);
      } else {
        setShowcomponent(false);
      }
    }, 210);
  }, [progress]);

  const fadeStyles = {
    transition: 'opacity 1s ease',
    opacity: (progressChange && file && progress === 100) || !file ? 1 : 0,
  };

  //actions
  const [position, setPosition] = useState('Center');
  const [isUncroppedSelected, setIsUncroppedSelected] = useState(false);
  const [showActionBar, setShowActionBar] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([4]);

  const handlePositionChange = (newPosition: string, index: number) => {
    setPosition(newPosition);
    setIsUncroppedSelected(false);
    setSelectedItems([index]);
  };

  const handleZoomClick = () => {
    setIsUncroppedSelected(true);
    setSelectedItems([]);
  };

  useEffect(() => {
    setShowActionBar(true);
  }, []);

  //function to determine the image is smaller or larger than the Box.
  const boxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    const imageElement = imageRef.current;

    if (!boxElement || !imageElement) return;

    const handleImageLoad = () => {
      const isImageLarger =
        imageElement.clientWidth < imageElement.naturalWidth ||
        imageElement.clientHeight < imageElement.naturalHeight;

      imageElement.style.objectFit =
        isUncroppedSelected && !isImageLarger
          ? 'contain'
          : isUncroppedSelected
          ? 'contain'
          : isImageLarger
          ? 'cover'
          : 'none';

      if (imageElement.style.objectFit === 'none') {
        imageElement.style.objectPosition = 'unset';
      } else {
        imageElement.style.objectPosition = '';
      }
    };

    handleImageLoad(); // Adjust initial objectFit based on the image size

    imageElement.addEventListener('load', handleImageLoad);

    return () => {
      imageElement.removeEventListener('load', handleImageLoad);
    };
  }, [isUncroppedSelected]);

  const combinedStyles = isUncroppedSelected
    ? localCss`
      ${styles.image};
      ${styles.uncropped};
    `
    : localCss`
      ${styles.image};
      ${croppingOptions.find((option) => option.name === position)?.style};
    `;

  const [isUploadedServer, setIsUploadedServer] = useState(false);
  const [isLoadingFile, setIsLoadingFile] = useState<boolean>(false);

  useEffect(() => {
    if (progressChange && file && showcomponent) {
      setIsUploadedServer(true);

      setTimeout(() => {
        setIsUploadedServer(false);
      }, 2800);
    }
  }, [progressChange, file, showcomponent]);

  const over = () => {
    setIsVisible(true);
  };
  const out = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (file && progress < 100) {
      setIsLoadingFile(true);
    } else if (!isUploadedServer) {
      setIsLoadingFile(false);
    }
  }, [file, progress, isUploadedServer]);
  

  useEffect(() => {
    if (isLoadingFile) {
      setIsVisible(false);
    }
  }, [isLoadingFile, isVisible]);

  console.log(isLoadingFile, "isLoadingFile")
  return (
    <Box width="100%" height="100%" ref={boxRef} >
      <Flex
        position="relative"
        minWidth="63px"
        width="100%"
        minHeight="66px"
        height="100%"
        borderRadius="8px"
        alignContent="center"
        justifyContent="center"
        overflow={isMenuOpen ? '' : 'hidden'}
        onMouseOver={() => !readonly && !isLoadingFile && !isUploadedServer && over()}
        onMouseOut={() => !readonly && !isMenuOpen && out()}
      >
        <Box
          position="absolute"
          left="0"
          top="0"
          display={isDragging && isDisabled === false ? 'block' : 'none'}
          zIndex={8}
          pointerEvents="none"
          w="100%"
          h="100%"
        >
          <FileHover typeSize={'imageSelector'} />
        </Box>

        {showActionBar && isDisabled === false && (
          <Box
            position="absolute"
            zIndex={3}
            width={sizeMenu == 'sm' ? '70%' : ['70%', '93%']}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bottom={isVisible ? 50 : -1}
            opacity={isVisible ? 1 : 0}
            pointerEvents={isVisible ? 'auto' : 'none'}
            transition="all 0.2s ease-in-out"
          >
            <ActionBarButtons
              sizeMenu={sizeMenu}
              position={position}
              uncropped={isUncroppedSelected}
              showMenu={isVisible}
              file={file}
              placeholderSrc={placeholderSrc}
              progress={progress}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handlePositionChange={handlePositionChange}
              handleZoomClick={handleZoomClick}
              selectedPosition={selectedItems}
              isLoadingFile={isLoadingFile}
              rootProps={getRootProps}
              inputProps={getInputProps}
              onClickEdit={(e) => e.stopPropagation()}
              accept={x?.accept}
            />
          </Box>
        )}

        <Box
          width="100%"
          minHeight="66px"
          height="100%"
          {...getRootProps()}
          onClick={(e) => e.stopPropagation()}
          pointerEvents={isDisabled || readonly ? 'none' : 'auto'}
        >
          <Flex
            as="label"
            cursor="pointer"
            bg={'compBackgroundFilled'}
            justifyContent="center"
            alignItems="center"
            minHeight="66px"
            height="100%"
            width="100%"
            position="relative"
            borderRadius="8px"
            title="Drag & Drop your files"
            sx={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            overflow={'hidden'}
          >
            {file && progress < 100 && (
              <Box
                bg={'imageLoad'}
                position="absolute"
                height="full"
                width="full"
                display={'flex'}
                justifyContent="center"
                alignItems="center"
                zIndex={3}
              >
                <Lottie speed={1} loop animationData={imageLoad} play />
              </Box>
            )}
            <input
              disabled={isDisabled}
              onClick={(e) => e.stopPropagation()}
              aria-label="drag and drop area"
              {...getInputProps()}
              accept={x?.accept}
              ref={inputFileRef}
            />
            <Image
              padding={isUncroppedSelected ? ['2px', '5px'] : '0px'}
              src={
                file
                  ? URL.createObjectURL(file)
                  : placeholderSrc 
                  ? placeholderSrc
                  : imagePlaceholder
              }
              alt="selected image"
              zIndex={2}
              ref={imageRef}
              css={combinedStyles}
              sx={
                isVisible && isDisabled === false
                  ? {
                      filter: 'blur(1px) brightness(0.85)',
                      webkitBackdropFilter: 'blur(1px)',
                    }
                  : fadeStyles
              }
              userSelect={'none'}
            />

            <Box
              position="absolute"
              right={'10px'}
              color={'stWarning.500'}
              top={'2px'}
              zIndex={3}
            >
              {warning && <Icon as={IconWarningMark} w="10px" h="10px" />}
            </Box>
          </Flex>
        </Box>

        <Flex
          position={'absolute'}
          left="0"
          bottom={0}
          zIndex="2"
          w="full"
          pointerEvents="none"
        >
          {isUploadedServer && (
            <Flex paddingX="17.5px" paddingY="20.5px" width="full">
              <ChakraProgress
                width={'full'}
                colorScheme="whiteAlpha"
                bgColor="transparent"
                height="3px"
                duration={2800}
              />
            </Flex>
          )}
        </Flex>
      </Flex>
      <ErrorMessage message={message} error={error} />
    </Box>
  );
};
