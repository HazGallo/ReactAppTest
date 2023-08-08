import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Box, Flex, Heading, Icon, Progress, Text } from '@chakra-ui/react';

import { IconWarningMark } from '../../assets/customIcons';
import { LOADING_MAINTITLE, MAINTITLE, SUBTITLE } from '../../shared/constants';
import { ButtonIco } from '../ButtonIco';
import FileHover from '../FileHover';
import { ErrorMessage } from './components/ErrorMessage';
import { FileDrop } from './components/FileDrop';
import { iconTypes, types } from './types/iconTypes';
import { MessagesErrors } from './validation/ErrorMessages';

interface Props {
  maxFiles?: number;
  maxSize?: number;
  type?: types;
  hasError: boolean;
  warning: boolean;
  errorMessage: string;
  onDrop: (arg0: any) => void;
  onChange: (event: any) => void;
  onChangeProgress: (progressChange: boolean) => void;
  progressChange?: boolean;
  isDisabled: boolean;
  uploadedFileName?: any;
  uploadedFileSize?: any;
  uploadedFileDuration?: any;
  setFileAttributes: (fileData: {
    name: string;
    size: number;
    duration: {
      hours: number;
      minutes: number;
      seconds: number;
    };
  }) => void;
}

export const FileDropper = (props: Props) => {
  const {
    type,
    errorMessage,
    warning,
    hasError,
    isDisabled,
    onChange,
    progressChange,
    uploadedFileDuration,
    uploadedFileName,
    uploadedFileSize,
    setFileAttributes,
  } = props;
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState<string | undefined>();
  const [sizeFile, setSizeFile] = useState<number | any>();
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>(errorMessage);
  const [isDragging, setIsDragging] = useState(false);
  const [video, setVideo] = useState<any>();
  const [showcomponent, setShowcomponent] = useState(false);
  const [showProgress, setshowProgress] = useState(false);
  const [cancelUpload, setCancelUpload] = useState<boolean>(false);

  // Nuevos estados para uploadedFileName, uploadedFileSize y uploadedFileDuration
  const [uploadedFileNameState, setUploadedFileNameState] =
    useState<any>(uploadedFileName);
  const [uploadedFileSizeState, setUploadedFileSizeState] =
    useState<any>(uploadedFileSize);
  const [uploadedFileDurationState, setUploadedFileDurationState] =
    useState<any>(uploadedFileDuration);

  const inputFileRef = useRef<HTMLInputElement>(null);

  function secondsToTime(duration: number) {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return { hours, minutes, seconds };
  }

  const durationFormatted = video ? secondsToTime(video) : null;

  const [file, setFile] = useState<File | null>(null);
  const x = iconTypes.find((x) => x.type === type);

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
    if (file) {
      setUploadedFileNameState(null);
      setUploadedFileSizeState(null);
      setUploadedFileDurationState(null);
    }
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
        }, 500);
        if (currentChunk < chunks) {
          setTimeout(() => {
            loadNext();
          }, delay);
        }
      };

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

  const handleCancelUpload = (e: any) => {
    e.preventDefault();
    setFile(null);
    setProgress(0); // reset progress state to 0
    setFileName('');
    setSizeFile('');
    setUploadedFileNameState(undefined); // Reseteamos los valores cargados
    setUploadedFileSizeState(undefined); // Reseteamos los valores cargados
    setUploadedFileDurationState(undefined); // Reseteamos los valores cargados
    setCancelUpload(true);
    setShowcomponent(false); // Ocultamos el componente FileDrop
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      const videoElement = document.createElement('video');

      videoElement.preload = 'metadata';
      videoElement.src = objectUrl;

      videoElement.onloadedmetadata = () => {
        URL.revokeObjectURL(objectUrl);

        const duration = videoElement.duration;

        setVideo(duration);
      };
    }

    if (type === 'image' || type === 'pdf' || type === 'zip') {
      setVideo(null);
    }
  }, [file]);

  useEffect(() => {
    const attributes = {
      name: fileName || uploadedFileNameState,
      size: sizeFile || uploadedFileSizeState,
      duration: durationFormatted || uploadedFileDurationState,
    };

    if (
      fileName !== undefined ||
      uploadedFileDurationState !== undefined ||
      durationFormatted !== undefined
    ) {
      setFileAttributes(attributes);
    }
  }, [
    fileName,
    uploadedFileNameState,
    sizeFile,
    uploadedFileSizeState,
    durationFormatted,
    uploadedFileDurationState,
    setFileAttributes,
  ]);

  return (
    <Box height="80px">
      {(progress === 100 && progressChange && file && showcomponent) ||
      (uploadedFileDurationState !== undefined &&
        uploadedFileDurationState !== null) ||
      (uploadedFileNameState !== undefined && uploadedFileNameState !== null) ||
      (uploadedFileSizeState !== undefined &&
        uploadedFileSizeState !== null) ? (
        <FileDrop
          durationFormatted={durationFormatted}
          uploadedFileDuration={uploadedFileDurationState}
          warning={warning}
          nameFile={fileName ?? uploadedFileNameState}
          sizeFile={sizeFile ?? uploadedFileSizeState}
          onClose={handleCancelUpload}
          type={type}
          inputFileRef={inputFileRef}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          onClickInput={(e) => e.stopPropagation()}
          onClickBox={(e) => e.stopPropagation()}
          isDragging={isDragging}
          position="absolute"
          left="0"
          top="0"
        />
      ) : (
        <Box
          position="relative"
          opacity={
            progress >= 100 && progressChange && file && showcomponent
              ? '0'
              : '1'
          }
        >
          <Box
            position="absolute"
            left="0"
            top="0"
            display={isDragging ? 'block' : 'none'}
          >
            <FileHover typeSize={'fileDropper'} />
          </Box>

          <div
            {...getRootProps()}
            onClick={(e) => e.stopPropagation()}
            style={{ opacity: isDragging ? '0' : '1' }}
          >
            <Flex
              as="label"
              cursor="pointer"
              border="2px"
              borderColor={error ? 'compBorderError' : 'blackAlpha.100'}
              bg={
                isDragging
                  ? 'compBackgroundFilledHover'
                  : isDisabled
                  ? 'compBackgroundDisabled'
                  : 'compBackgroundFilled'
              }
              _hover={
                isDisabled ? {} : { background: 'compBackgroundFilledHover' }
              }
              _dark={{
                borderColor: error ? 'compBorderError' : 'neWhite.500',
              }}
              borderStyle="dashed"
              flexDir="initial"
              justifyContent="initial"
              alignItems="center"
              height="80px"
              width="364px"
              position="relative"
              pl="18px"
              py="18px"
              borderRadius="8px"
              title="Drag & Drop your files"
              sx={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              <input
                disabled={isDisabled}
                onClick={(e) => e.stopPropagation()}
                aria-label="drag and drop area"
                {...getInputProps()}
                accept={x?.accept}
                ref={inputFileRef}
              />
              <Flex
                width="44px"
                height="44px"
                rounded="full"
                bg={x?.bg}
                justifyContent="center"
                alignItems="center"
                mr="15px"
                sx={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                <Icon
                  as={x?.icon}
                  color="neWhite.500"
                  fontSize="24px"
                  fontWeight="100"
                />
              </Flex>

              <Flex flexDir="column" w="265px">
                <Heading
                  mt={file ? '5px' : '4px'}
                  color={x?.bg}
                  size="sm"
                  sx={
                    isDisabled
                      ? { opacity: 0.5, cursor: 'not-allowed' }
                      : { cursor: 'pointer' }
                  }
                >
                  {file && progress > 0 ? LOADING_MAINTITLE : MAINTITLE}
                </Heading>

                {file && showProgress ? (
                  <Flex w="100%" alignItems="center">
                    <Progress
                      w="226px"
                      rounded="sm"
                      marginY="1"
                      value={progress}
                      colorScheme={x?.light}
                      size="xs"
                      bgColor="bgColorProgress"
                      _dark={{ colorScheme: x?.dark }}
                    />
                    <Box marginX="16px">
                      <ButtonIco
                        zIndex={100}
                        aria-label={'button-Icon-Close'}
                        color="baGrey"
                        _hover={{ color: 'baGrey' }}
                        typeIcon="IconCloseFilled"
                        backgroundType="noBackground"
                        onClick={cancelUpload}
                        sizeName={'sm'} //fixed
                        isDisabled={isDisabled}
                      />
                    </Box>
                  </Flex>
                ) : (
                  <></>
                )}
                <Text
                  mt={file ? '-4px' : '4px'}
                  color="blackAlpha.600"
                  _dark={{
                    color: 'neWhite.500',
                  }}
                  textStyle="xs"
                  noOfLines={[1, 1]}
                  w="200px"
                  sx={
                    isDisabled
                      ? { opacity: 0.5, cursor: 'not-allowed' }
                      : { cursor: 'pointer' }
                  }
                >
                  {file && progress > 0 ? fileName : SUBTITLE}
                </Text>
              </Flex>
              <Box
                position="absolute"
                right={'7px'}
                color="stWarning.500"
                _dark={{
                  color: 'stWarning.400',
                }}
                top={'-2px'}
              >
                {warning && <Icon as={IconWarningMark} w="10px" h="10px" />}
              </Box>
            </Flex>

            <ErrorMessage errorMessage={message} error={error} />
          </div>
        </Box>
      )}
    </Box>
  );
};
