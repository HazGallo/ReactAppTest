import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { VscCircleFilled } from 'react-icons/vsc';

interface Props {
  typeAnimacion?:
    | 'courseloading'
    | 'expressloading'
    | 'instagramloading'
    | 'stepsLoading';
}

export const FileDrop = (props: Props) => {
  const { typeAnimacion } = props;

  return (
    <Box
      height="80px"
      width="364px"
      bg={
        typeAnimacion === 'courseloading'
          ? 'baPomegranate.500'
          : 'blackAlpha.50'
      }
      borderRadius="100px"
      display="flex"
      alignItems="center"
      paddingX="29px"
    >
      <Flex alignItems="center" w="full">
        {typeAnimacion === 'courseloading' ? (
          <>
            <Box>
              <Flex
                width="36px"
                height="35px"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                shadow="2xl"
                mr="15px"
                background="whiteAlpha.300"
                color="white"
                fontWeight="bold"
                fontSize="12px"
              >
                CO
              </Flex>
              {/* <Badge type={'course'} size={'sm'} /> */}
            </Box>

            <Flex justifyContent="space-between" alignItems="center">
              <Flex flexDir="column">
                <Heading
                  fontSize="16px"
                  fontWeight="normal"
                  color="neWhite.500"
                  cursor="pointer"
                  letterSpacing="-0.16px"
                  noOfLines={[1, 1]}
                >
                  Ecommerce complete course
                </Heading>
                <Text
                  marginTop="5px"
                  color="neWhite.500"
                  fontSize="10px"
                  fontWeight="normal"
                  cursor="pointer"
                  letterSpacing="0"
                  display="flex"
                  alignItems="center"
                >
                  <span>
                    25 Contents
                    <Icon
                      as={VscCircleFilled}
                      color="white"
                      mx="8px"
                      marginBottom="-1px"
                    />
                  </span>

                  <span>
                    Test
                    <Icon
                      as={VscCircleFilled}
                      color="white"
                      mx="8px"
                      marginBottom="-1px"
                    />
                  </span>
                  <span>
                    Game
                    <Icon
                      as={VscCircleFilled}
                      color="white"
                      mx="8px"
                      marginBottom="-1px"
                    />
                  </span>
                  <span>Materials</span>
                </Text>
              </Flex>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              justifyContent="center"
              alignItems="center"
              color="neBlack.500"
              w="full"
            >
              <Box
                marginTop="5px"
                fontSize="16px"
                fontWeight="medium"
                cursor="pointer"
                letterSpacing=" -0.16px"
                display="flex"
                justifyContent={'center'}
                alignItems="center"
                w="full"
              >
                <span>
                  HM Platform
                  <Icon
                    as={VscCircleFilled}
                    mx="8px"
                    marginBottom="-1px"
                    color="neGrey.700"
                  />
                </span>

                <span>Store Manager Project</span>
              </Box>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
