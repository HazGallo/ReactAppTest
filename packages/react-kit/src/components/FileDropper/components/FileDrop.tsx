import { useEffect, useState } from 'react';
import {
  Box,
  BoxProps,
  Center,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';

import { ButtonIco } from '../../../components/ButtonIco';
import { IconWarningMark } from '../../../assets/customIcons';

import { iconTypes, types } from '../types/iconTypes';
import FileHover from '../../../components/FileHover';

import { motion } from 'framer-motion';

interface Props extends BoxProps {
  type?: types;
  nameFile: string;
  sizeFile: any;
  warning: boolean;
  onClose?: (arg0: any) => void;
  durationFormatted?: any;
  inputFileRef?: any;
  onClickInput?: (arg0: any) => void;
  onClickBox?: (arg0: any) => void;
  getRootProps: any;
  getInputProps: any;
  isDragging?: boolean;
  uploadedFileDuration?: string;
}

export const FileDrop = (props: Props) => {
  const {
    type,
    onClose,
    nameFile,
    sizeFile,
    warning,
    durationFormatted,
    onClickInput,
    inputFileRef,
    getInputProps,
    onClickBox,
    getRootProps,
    isDragging,
    uploadedFileDuration,
  } = props;
  const x = iconTypes.find((x) => x.type === type);
  const [first, setFirst] = useState(true);
  const [first2, setFirst2] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirst(false);
    }, 300);
  }, [first]);
  useEffect(() => {
    setTimeout(() => {
      setFirst2(false);
    }, 220);
  }, [first]);

  return (
    <Box position="relative">
      <Box
        width="364px"
        height="80px"
        rounded="full"
        position="relative"
        overflow="hidden"
      >
        <Center position="relative" height="100%">
          <Box
            position="absolute"
            display={isDragging ? 'block' : 'none'}
            zIndex={3}
            width="full"
            pointerEvents={'none'}
          >
            <FileHover typeSize={'fileDropper'} typeBorder="complete" />
          </Box>

          <Flex
            height="100%"
            as={motion.div}
            rounded="full"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: '100%',
              opacity: 1,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            bg={x?.bg}
            zIndex={2}
          >
            <Box
              w="full"
              position="relative"
              sx={{
                transition: 'all .5s ease-in-out',
              }}
              opacity={first2 ? 0 : 1}
            >
              <Box position="relative">
                {!first2 ? (
                  <Flex
                    position="absolute"
                    top={'22px'}
                    left={'304px'}
                    zIndex={2}
                  >
                    <ButtonIco
                      typeIcon="IconClose"
                      padding="7px"
                      backgroundType="noBackground"
                      onClick={onClose}
                      cursor="pointer"
                      mr="34px"
                      fontWeight="100"
                      sizeName={'md'} //fixed
                      color="neWhite.500"
                      _hover={{
                        color: 'neWhite.500',
                      }}
                      aria-label={'Button-Icon-Close'}
                    />
                    <Box
                      position="absolute"
                      right={'10px'}
                      color={'stWarning.500'}
                      top={'-18px'}
                    >
                      {warning ? (
                        <Icon as={IconWarningMark} w="10px" h="10px" />
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Flex>
                ) : (
                  <></>
                )}

                <div {...getRootProps()} onClick={onClickBox}>
                  <Flex
                    as="label"
                    sx={{
                      transition: 'all .5s ease-in-out',
                      border: first ? '2px' : '0px',
                      borderStyle: first ? 'dashed' : 'none',
                      borderColor: first ? 'blackAlpha.100' : 'transparent',
                    }}
                    borderRadius="100px"
                    flexDir="initial"
                    justifyContent="initial"
                    alignItems="center"
                    minHeight="80px"
                    width={'404px'}
                    pl="18px"
                    py="18px"
                    _hover={{
                      opacity: '.8',
                      transition: '.3s ease',
                    }}
                  >
                    {!first2 ? (
                      <>
                        <input
                          onClick={onClickInput}
                          aria-label="drag and drop area"
                          {...getInputProps()}
                          accept={x?.accept}
                          ref={inputFileRef}
                        />
                        <Flex
                          width="44px"
                          height="44px"
                          rounded="full"
                          justifyContent="center"
                          alignItems="center"
                          shadow="2xl"
                          mr="15px"
                          background="whiteAlpha.300"
                        >
                          <Icon
                            as={x?.icon}
                            color="neWhite.500"
                            fontSize="24px"
                            fontWeight="100"
                          />
                        </Flex>

                        <Flex
                          w="265px"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Flex flexDir="column" w="200px">
                            <Heading
                              mt="3px"
                              fontSize="16px"
                              fontWeight="medium"
                              color="neWhite.500"
                              cursor="pointer"
                              noOfLines={[1, 1]}
                            >
                              {nameFile ?? 'MasterClass.mp4'}
                            </Heading>
                            <Text
                              mt="7px"
                              color="neWhite.500"
                              textStyle="xs"
                              cursor="pointer"
                            >
                              {type === 'image' ||
                              type === 'pdf' ||
                              type === 'zip' ? (
                                <></>
                              ) : (
                                <span style={{ whiteSpace: 'pre' }}>
                                  {durationFormatted !== null
                                    ? durationFormatted?.hours +
                                      ':' +
                                      durationFormatted.minutes +
                                      ':' +
                                      durationFormatted.seconds +
                                      '   '
                                    : uploadedFileDuration ?? '00:00:00   '}
                                </span>
                              )}
                              {sizeFile ?? '252'} MB
                            </Text>
                          </Flex>
                        </Flex>
                      </>
                    ) : (
                      <></>
                    )}
                  </Flex>
                </div>
              </Box>
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box
        sx={{
          transition: 'all .2s ease-in-out',
        }}
        opacity={first ? 1 : 0}
        border="2px"
        borderStyle="dashed"
        borderColor={'blackAlpha.100'}
        height="80px"
        left="0px"
        top="0px"
        width="364px"
        position="absolute"
        bg={'compBackgroundFilled'}
        borderRadius="8px"
      />
    </Box>
  );
};
