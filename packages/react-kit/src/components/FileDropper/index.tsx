import { Box, Flex, Heading, Icon, Progress, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconClose, IconWarningMark } from '../../assets/customIcons';
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
  disabled: boolean;
}

export const FileDropper = (props: Props) => {
  const { type, errorMessage, warning, hasError, disabled } = props;
  const [error, setError] = useState(false);
  const [fileName, setFileName] = useState<any>();
  const [sizeFile, setSizeFile] = useState<any>();
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>(errorMessage);
  const [isDragging, setIsDragging] = useState(false);
  const [video, setVideo] = useState<any>();

  const inputFileRef = useRef<HTMLInputElement>(null);

  // const handleInputChange = () => {
  //   const file = inputFileRef.current?.files?.[0];
  //   if (file) {
  //     const video = document.createElement("video");
  //     video.preload = "metadata";
  //     video.src = URL.createObjectURL(file);
  //     video.onloadedmetadata = () => {
  //       setVideo(video.duration)
  //     };
  //   }
  // }

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
      setIsDragging(false);
    },
    onDragEnter: handleDragEnter,
    onDragLeave: handleDragLeave,
    multiple: false,
  });

  useEffect(() => {
    setError(false);
    setMessage('Error Message');
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
    if (event) {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = URL.createObjectURL(event);
      video.onloadedmetadata = () => {
        setVideo(video.duration);
      };
    }

    if (event) {
      const fileExtension = event?.name.split('.').pop()?.toLowerCase();
      if (type && fileExtension) {
        if (!MessagesErrors[type].allowedExtensions.includes(fileExtension)) {
          setError(true);
          setMessage(MessagesErrors[type].message);
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

      reader.onloadend = () => {
        currentChunk++;
        setProgress((currentChunk / chunks) * 100);
        if (currentChunk < chunks) loadNext();
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

  return (
    <div>
      {progress >= 100 ? (
        <FileDrop
          durationFormatted={durationFormatted}
          warning={warning}
          nameFile={fileName}
          sizeFile={sizeFile}
          onClose={() => setProgress(0)}
          type={type}
          onDrop={(files: any) => {
            console.log({ files });
          }}
        />
      ) : (
        <div {...getRootProps()} onClick={(e) => e.stopPropagation()}>
          <Flex
            as="label"
            cursor="pointer"
            border="2px"
            borderColor={error ? 'compBorderError' : 'blackAlpha.100'}
            bg={
              isDragging ? 'compBackgroundFilledHover' : 'compBackgroundFilled'
            }
            _hover={disabled ? {} : { background: 'compBackgroundFilledHover' }}
            _dark={{
              borderColor: error ? 'compBorderError' : 'neWhite.500',
            }}
            borderStyle="dashed"
            flexDir="initial"
            justifyContent="initial"
            alignItems="center"
            minHeight="80px"
            minWidth="364px"
            position="relative"
            pl="25px"
            rounded="md"
            title="Drag & Drop your files"
            width="inherit"
            sx={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
          >
            <input
              disabled={disabled}
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
              sx={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
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
                mt="3px"
                color={x?.bg}
                size="sm"
                sx={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                {progress > 0 ? 'Updating...' : 'Just drop it!'}
              </Heading>
              {progress > 0 ? (
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
                  <Icon
                    as={IconClose}
                    cursor="pointer"
                    marginX="16px"
                    background="baGrey"
                    rounded="full"
                    color="neWhite.500"
                    padding="2px"
                    w="16px"
                    onClick={() => setProgress(0)}
                    h="16px"
                    fontWeight="100"
                  />
                </Flex>
              ) : (
                <></>
              )}
              <Text
                mt="5px"
                color="blackAlpha.600"
                _dark={{
                  color: 'neWhite.500',
                }}
                textStyle="xs"
                noOfLines={[1, 1]}
                w="200px"
                sx={disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                {progress > 0 ? fileName : 'or search in your device'}
              </Text>
            </Flex>
            <Box
              position="absolute"
              right={'4px'}
              color="stWarning.500"
              _dark={{
                color: 'stWarning.400',
              }}
              top={'-2px'}
            >
              {warning ? (
                <Icon as={IconWarningMark} w="10px" h="10px" />
              ) : (
                <></>
              )}
            </Box>
          </Flex>

          <Box width="full" minHeight="23px">
            {error ? (
              <Box
                fontSize="12px"
                paddingLeft=".4em"
                minWidth="364px"
                paddingTop=".4em"
                letter-spacing="0px"
                color="compBorderError"
                width="inherit"
              >
                {message}
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </div>
      )}
    </div>
  );
};
