import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { DateTime } from 'luxon';
import { VscCircleFilled } from 'react-icons/vsc';
import { TypesStatus } from './types/TypesStatus';
import { ItemPublicationStatusSkeleton } from './ItemPublicationStatusSkeleton';

export type ContentTypeStatus = 'Draft' | 'Planned' | 'Published' | 'none';

interface Props {
  type: ContentTypeStatus;
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const ItemPublicationStatus = (props: Props) => {
  const { skeleton, year, month, day, hour, minute, type, sizeCard } = props;

  const x = TypesStatus.find((x) => x.type === type);

  return (
    <Box>
      {skeleton ? (
        <ItemPublicationStatusSkeleton
          sizeCard={sizeCard}
        />
      ) : (
        <Box marginLeft={sizeCard == 'md' ? ['-2px', '1px'] : '-2px'}>
          {
            type !== "none" &&
            <Flex>
            {x?.type == 'Draft' ? (
              <>
                <Icon
                  as={x?.icon}
                  color="neGrey.400"
                  mr="7.67px"
                  mb="4px"
                  w="16px"
                  h="16px"
                />
                <Text
                  color="neGrey.400"
                  textStyle="sm"
                  _selection={{
                    background: 'none',
                    color: 'none',
                  }}
                  cursor="pointer"
                >
                  {x?.type}
                </Text>
              </>
            ) : (
              <>
                <Icon
                  as={x?.icon}
                  color="neGrey.400"
                  mr="5px"
                  w="18px"
                  h="18px"
                  pb="3px"
                />
                <Box>
                  <Flex>
                    <Text
                      color="neGrey.400"
                      textStyle="sm"
                      _selection={{
                        background: 'none',
                        color: 'none',
                      }}
                      cursor="pointer"

                    >
                      {DateTime.fromObject({ year, month, day }).toFormat(
                        'dd/MM/yyyy'
                      )}
                    </Text>
                    <Icon
                      as={VscCircleFilled}
                      color="neGrey.400"
                      w="5.5px"
                      mx="3px"
                      mt="1px"
                      display={sizeCard == 'md' ? ['none', 'block'] : 'none'}
                      cursor="pointer"

                    />
                    <Text
                      color="neGrey.400"
                      textStyle="sm"
                      display={sizeCard == 'md' ? ['none', 'block'] : 'none'}
                      _selection={{
                        background: 'none',
                        color: 'none',
                      }}
                      cursor="pointer"

                    >
                      {DateTime.fromObject({ hour, minute }).toFormat('T')}
                    </Text>
                  </Flex>
                </Box>
              </>
            )}
          </Flex>
          }
        
        </Box>
      )}
    </Box>
  );
};
