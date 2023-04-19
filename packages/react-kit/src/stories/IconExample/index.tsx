import { Card, CardBody, Flex, Heading, Icon } from '@chakra-ui/react';
import { IconsTypes } from './types/IconsTypes';

export type contentType =
  | 'IconAudio'
  | 'IconArticle'
  | 'IconVideo'
  | 'IconImage'
  | 'IconExternal'
  | 'IconPlaylist'
  | 'IconPdf'
  | 'IconGallery'
  | 'IconHtml'
  | 'IconZip'
  | 'IconTask'
  | 'IconPoll'
  | 'IconTest'
  | 'IconGame'
  | 'IconChallenge'
  | 'IconDate'
  | 'IconSend'
  | 'IconDotsHorizontal'
  | 'IconCheck'
  | 'IconDraft'
  | 'IconGhost';

interface Props {
  size: '16px' | '24px' | '32px' | '48px' | '64px';
  type: contentType;
}

export const IconExample = ({ size, type }: Props) => {
  const x = IconsTypes.find((x) => x.type === type);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="6"
      marginTop={8}
    >
      <Card width={['140px', '232px']} h="100%">
        <CardBody>
          <Flex flexDirection="column" alignItems="center">
            <Icon as={x?.icon} w={size} h={size} />

            <Heading size="sm">{x?.type}</Heading>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};
