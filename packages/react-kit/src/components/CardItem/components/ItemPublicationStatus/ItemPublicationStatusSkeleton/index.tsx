import {
  Box,
  Flex,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { TypesStatus } from '../types/TypesStatus';

export type ContentTypeStatus = 'Draft' | 'Planned' | 'Published';

interface Props {
  type: ContentTypeStatus;
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  sizeCard?: 'sm' | 'md';
}

export const ItemPublicationStatusSkeleton = (props: Props) => {
  const { year, month, day, hour, minute, type, sizeCard } = props;

  const x = TypesStatus.find((x) => x.type === type);

  return (
    <Box marginLeft={sizeCard == 'md' ? ['-2px', '1px'] : '-2px'}>
      <Flex>
        {x?.type == 'Draft' ? (
          <>
            <Skeleton
              startColor="neGrey.400"
              endColor="neWhite.500"
              _dark={{
                startColor: 'whiteAlpha.400',
                endColor: 'whiteAlpha.200',
              }}
              mr="5px"
              w="18px"
              h="18px"
              pb="3px"
            />

            <SkeletonText
              mt="4px"
              noOfLines={1}
              textStyle="sm"
              startColor="neGrey.400"
              endColor="neWhite.500"
              _dark={{
                startColor: 'whiteAlpha.400',
                endColor: 'whiteAlpha.200',
              }}
            >
              {x?.type}
            </SkeletonText>
          </>
        ) : (
          <>
            <Skeleton
              startColor="neGrey.400"
              endColor="neWhite.500"
              _dark={{
                startColor: 'whiteAlpha.400',
                endColor: 'whiteAlpha.200',
              }}
              mr="5px"
              w="18px"
              h="18px"
              pb="3px"
            />

            <Box>
              <Flex mt="4px">
                <SkeletonText
                  noOfLines={1}
                  textStyle="sm"
                  startColor="neGrey.400"
                  endColor="neWhite.500"
                  _dark={{
                    startColor: 'whiteAlpha.400',
                    endColor: 'whiteAlpha.200',
                  }}
                >
                  {DateTime.fromObject({ year, month, day }).toFormat(
                    'dd/MM/yyyy'
                  )}
                </SkeletonText>

                <Skeleton
                  startColor="neGrey.400"
                  endColor="neWhite.500"
                  _dark={{
                    startColor: 'whiteAlpha.400',
                    endColor: 'whiteAlpha.200',
                  }}
                  w="5.5px"
                  mx="3px"
                  mt="1px"
                  display={sizeCard == 'md' ? ['none', 'block'] : 'none'}
                />

                <SkeletonText
                  noOfLines={1}
                  textStyle="sm"
                  startColor="neGrey.400"
                  endColor="neWhite.500"
                  _dark={{
                    startColor: 'whiteAlpha.400',
                    endColor: 'whiteAlpha.200',
                  }}
                  display={sizeCard == 'md' ? ['none', 'block'] : 'none'}
                >
                  {DateTime.fromObject({ hour, minute }).toFormat('T')}
                </SkeletonText>
              </Flex>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};
