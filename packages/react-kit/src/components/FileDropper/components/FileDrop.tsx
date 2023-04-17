import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconClose, IconWarningMark } from '../../../assets/customIcons';
import { iconTypes, types } from '../types/iconTypes';

interface Props {
  type?: types;
  nameFile: string;
  sizeFile: any;
  warning: boolean;
  onDrop: (arg0: any) => void;
  onClose?: (arg0: any) => void;
  durationFormatted?: any;
}

export const FileDrop = (props: Props) => {
  const { type, onClose, nameFile, sizeFile, warning, durationFormatted } =
    props;
  const x = iconTypes.find((x) => x.type === type);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirst(false);
    }, 100);
  }, [first]);

  return (
    <Box>
      <Flex
        as="label"
        sx={{
          transition: 'all 1s ease-in-out',
          bg: x?.bg,
          opacity: first ? 0.1 : 1,
        }}
        borderRadius="100px"
        flexDir="initial"
        justifyContent="initial"
        alignItems="center"
        minHeight="80px"
        minWidth="364px"
        pl="25px"
        shadow="xl"
        width="inherit"
        _hover={{
          opacity: '.8',
          transition: '.3s ease',
        }}
      >
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

        <Flex w="265px" justifyContent="space-between" alignItems="center">
          <Flex flexDir="column" w="200px">
            <Heading
              mt="3px"
              fontSize="16px"
              fontWeight="medium"
              color="neWhite.500"
              noOfLines={[1, 1]}
            >
              {nameFile ?? 'MasterClass.mp4'}
            </Heading>
            <Text mt="7px" color="neWhite.500" textStyle="xs">
              {durationFormatted !== null
                ? durationFormatted?.hours +
                  ':' +
                  durationFormatted.minutes +
                  ':' +
                  durationFormatted.seconds
                : '00:00:00'}
              &nbsp; {sizeFile ?? '252'} &nbsp;MB
            </Text>
          </Flex>
          <Flex position="relative">
            <Icon
              as={IconClose}
              onClick={onClose}
              cursor="pointer"
              ml="15px"
              mr="3px"
              background="transparent"
              rounded="full"
              color="neWhite.500"
              padding="7px"
              w="40px"
              h="40px"
              fontWeight="100"
              _hover={{
                background: 'whiteAlpha.500',
                rounded: 'md',
              }}
            />
            <Box
              position="absolute"
              right={'22px'}
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
        </Flex>
      </Flex>
      <Box minHeight="23px"></Box>
    </Box>
  );
};
