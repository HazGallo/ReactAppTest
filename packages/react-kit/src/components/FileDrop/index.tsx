import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { VscCircleFilled } from 'react-icons/vsc';
import { Badge } from '../Badge';

export const FileDrop = () => {
  return (
    <Box
      height="80px"
      width="364px"
      bg="baPomegranate.500"
      borderRadius="100px"
      display="flex"
      alignItems="center"
      paddingX="29px"
    >
      <Flex alignItems="center">
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
      </Flex>
    </Box>
  );
};
