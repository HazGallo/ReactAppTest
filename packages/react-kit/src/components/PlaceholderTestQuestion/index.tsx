import { Box, Flex, Heading, Progress, Text } from '@chakra-ui/react';
import React, { useEffect, useState, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { IconCards } from '../../../src/assets/customIcons';
import { noIcoType, types } from '../../shared/iconsTypes/icons';
import { ButtonIco } from '../ButtonIco';
import FileHover from '../FileHover';
import { Ico } from '../Ico';
import { BiLike } from 'react-icons/bi';
import Lottie from 'react-lottie-player';
import imageLoad from '../ImageSelector/animation/imageload.json';

interface Props {
  title: string;
  description: string;
  typeIcon?: types | noIcoType;
  children?: any;
  reset?: boolean;
  onExcelDataProcessed?: (data: { fileName: string; data: any[] }) => void; // Nueva prop
}

export const PlaceholderTestQuestion = (props: Props) => {
  const { description, title, reset, onExcelDataProcessed } = props;

  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [excelData, setExcelData] = useState<{
    fileName: string;
    data: any[];
  } | null>(null);
  const [isProcessingComplete, setIsProcessingComplete] = useState(false);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    if (isUpdating) {
      progressInterval = setInterval(() => {
        setProgressValue((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setIsProcessingComplete(true);
              setIsUpdating(false);
            }, 300);
            return 100;
          } else {
            return prev + 1;
          }
        });
      }, 30);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isUpdating]);

  const dragHandlers = useMemo(
    () => ({
      handleDragOver: (e: React.DragEvent) => {
        e.preventDefault();

        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }

        if (!isDragging) {
          setHoverTimeout(
            setTimeout(() => {
              setIsDragging(false);
              setDragCounter(0);
            }, 150)
          );
        }
      },
      handleDragEnter: (e: React.DragEvent) => {
        e.preventDefault();

        if (!isDragging) {
          setIsDragging(true);
        }

        setDragCounter((prev) => prev + 1);
      },
      handleDragLeave: (e: React.DragEvent) => {
        e.preventDefault();

        setDragCounter((prev) => prev - 1);
        if (dragCounter === 1) {
          setIsDragging(false);
        }
      },
    }),
    [dragCounter, hoverTimeout, isDragging]
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setDragCounter(0);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    const files = e.dataTransfer.files;
    if (files.length) {
      setIsUpdating(true);
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event?.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const excelProcessedData = {
          fileName: file.name,
          data: jsonData,
        };

        setExcelData(excelProcessedData);

        if (onExcelDataProcessed) {
          onExcelDataProcessed(excelProcessedData);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };
  useEffect(() => {
    if (reset) {
      cancelUpload();
    }
  }, [reset]);

  const cancelUpload = () => {
    setIsDragging(false);
    setDragCounter(0);
    setIsUpdating(false);
    setProgressValue(0);
    setExcelData(null);
    setIsProcessingComplete(false);
  };

  return (
    <Box
      w="full"
      height="calc(100vh - 340px)"
      borderRadius={'8px'}
      bg={'compBackgroundFilled'}
      display="flex"
      justifyContent={'center'}
      alignItems="center"
      flexDir="column"
      color={'txTertiary'}
      border="2px dashed"
      borderColor="blackAlpha.100"
      _dark={{
        color: 'neWhite.500',
      }}
      px={['50px', '50px']}
      py={['100px', '160px']}
      overflow="hidden"
      onDragOver={dragHandlers.handleDragOver}
      onDragEnter={dragHandlers.handleDragEnter}
      onDragLeave={dragHandlers.handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragging ? (
        <FileHover typeBorder="medium" typeSize="imageSelector" />
      ) : (
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          marginTop="25px"
          position="relative"
        >
          {isProcessingComplete ? (
            <Box color="neAccent.500" marginBottom="20px">
              <BiLike size="40" />
              <Box
                position="absolute"
                w="full"
                height="full"
                left="0"
                top="-4.4rem"
                display="flex"
                justifyContent="center"
              >
                <Lottie speed={1} loop animationData={imageLoad} play />
              </Box>
            </Box>
          ) : (
            <Flex
              justifyContent="center"
              alignItems="center"
              width="96px"
              height="96px"
              rounded="full"
              bg="txHighlight"
            >
              <Ico sizeName="lg" color="white" icon={IconCards} />
            </Flex>
          )}

          <Heading
            marginTop="15px"
            letterSpacing="-0.75px"
            color="txHighlight"
            fontWeight="bold"
            fontSize="30px"
          >
            {isUpdating
              ? 'Updating...'
              : isProcessingComplete
              ? 'Processing Questions'
              : title}
          </Heading>

          {isUpdating && (
            <>
              <Flex
                width="265px"
                alignItems="center"
                marginTop="15px"
                justifyContent="center"
              >
                <Progress
                  marginLeft="1.5rem"
                  w="226px"
                  rounded="sm"
                  value={progressValue}
                  colorScheme="neAccent"
                  size="xs"
                  bgColor="bgColorProgress"
                />
                <Box marginLeft="10px">
                  <ButtonIco
                    zIndex={100}
                    aria-label={'button-Icon-Close'}
                    color="baGrey"
                    _hover={{ color: 'baGrey' }}
                    typeIcon="IconCloseFilled"
                    backgroundType="noBackground"
                    sizeName={'sm'}
                    isDisabled={false}
                    onClick={cancelUpload}
                  />
                </Box>
              </Flex>
              <Text
                marginTop="10px"
                letterSpacing="0px"
                fontWeight="normal"
                fontSize="14px"
                color="text"
              >
                {excelData?.fileName}
              </Text>
            </>
          )}

          {!isUpdating && (
            <Text
              marginTop={isProcessingComplete ? '15px' : '10px'}
              letterSpacing="0px"
              fontWeight="normal"
              fontSize="14px"
              color="text"
            >
              {isProcessingComplete ? (
                <>
                  The <b>questions were uploaded correctly</b>, completing the
                  process can take a few moments.
                </>
              ) : (
                description
              )}
            </Text>
          )}
          {isProcessingComplete ? (
            <Text
              marginTop="15px"
              color="neGrey.700"
              fontWeight="normal"
              fontSize="14px"
              letterSpacing="0px"
            >
              You can leave this page
            </Text>
          ) : (
            <></>
          )}
        </Flex>
      )}
    </Box>
  );
};
