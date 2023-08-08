import { Box, Flex, Skeleton } from '@chakra-ui/react';

export const SkeletonDrawer = () => {
  return (
    <Box
      color="neWhite.500"
      w="100%"
      px="20px"
      display={'flex'}
      justifyContent={'center'}
      flexDir="column"
      alignItems="center"
      pb="20px"
    >
      <Flex justifyContent={'space-between'} alignItems="center" w="100%">
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40px"
          h={'40px'}
          mt="40px"
          borderRadius="8px"
        />
        <Flex justifyContent={'center'} alignItems="center" gap="20px">
          <Skeleton
            color="neGrey.400"
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: 'whiteAlpha.400',
              endColor: 'whiteAlpha.200',
            }}
            w="50px"
            h={'40px'}
            mt="40px"
            borderRadius="8px"
          />
          <Skeleton
            color="neGrey.400"
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: 'whiteAlpha.400',
              endColor: 'whiteAlpha.200',
            }}
            w="50px"
            h={'40px'}
            mt="40px"
            borderRadius="8px"
          />
        </Flex>
      </Flex>

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'40px'}
        mt="40px"
        borderRadius="8px"
      />

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'60px'}
        mt="20px"
        borderRadius="8px"
      />

      <Flex
        justifyContent={'flex-start'}
        alignItems="center"
        h="100%"
        w="100%"
        mt="40px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40%"
          h={'12px'}
          borderRadius="8px"
        />
      </Flex>

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'80px'}
        mt="20px"
        borderRadius="full"
      />

      <Flex
        justifyContent={'flex-start'}
        alignItems="center"
        h="100%"
        w="100%"
        mt="40px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40%"
          h={'12px'}
          borderRadius="8px"
        />
      </Flex>

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'200px'}
        mt="20px"
        borderRadius="8px"
      />

      <Flex
        justifyContent={'flex-start'}
        alignItems="center"
        h="100%"
        w="100%"
        mt="40px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40%"
          h={'12px'}
          borderRadius="8px"
        />
      </Flex>

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'40px'}
        mt="20px"
        borderRadius="8px"
      />

      <Flex
        justifyContent={'flex-start'}
        alignItems="center"
        h="100%"
        w="100%"
        mt="40px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40%"
          h={'12px'}
          borderRadius="8px"
        />
      </Flex>

      <Box
        display={'flex'}
        justifyContent={'flex-start'}
        flexWrap={'wrap'}
        gap="15px"
        mt="20px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="80px"
          h={'80px'}
          borderRadius="8px"
        />
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="80px"
          h={'80px'}
          borderRadius="8px"
        />
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="80px"
          h={'80px'}
          borderRadius="8px"
        />
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="80px"
          h={'80px'}
          borderRadius="8px"
        />
      </Box>

      <Flex
        justifyContent={'flex-start'}
        alignItems="center"
        h="100%"
        w="100%"
        mt="40px"
      >
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="40%"
          h={'12px'}
          borderRadius="8px"
        />
      </Flex>

      <Skeleton
        color="neGrey.400"
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        w="100%"
        h={'80px'}
        mt="20px"
        borderRadius="8px"
      />
    </Box>
  );
};
