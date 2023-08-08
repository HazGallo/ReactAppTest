import { Box, Flex, TabList } from '@chakra-ui/react';
import { Button, ButtonIco, Tag } from '@iseazy/react-kit';
import { useState } from 'react';
import { CustomTab } from '../../Navbar/components/CustomTab';
import useSectionsStore from 'src/store/useSectionsStore';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  onClose?: () => void;
  handleTranslate?: () => void;
  showTranslate?: boolean;
  languages: string[];
}

export const HeaderDrawer = (props: Props) => {
  const {
    onClick,
    disabled,
    onClose,
    handleTranslate,
    showTranslate,
    languages
  } = props;

  const [selectedItems, setSelectedItems] = useState<number[]>([0]);

  const handleTagClick = (index: number, lenguage: string) => {
    setSelectedItems([index]);
  };

  return (
    <Flex
      justifyContent={'center'}
      alignItems="center"
      flexDir={'column'}
      w="100%"
    >
      <Flex justifyContent={'space-between'} alignItems="center" w="100%">
        <ButtonIco
          aria-label={''}
          sizeName={'md'}
          backgroundType="noBackground"
          typeIcon="IconClose"
          onClick={onClose}
        />

        <Flex gap="3">
          <ButtonIco
            aria-label={''}
            sizeName={'md'}
            backgroundType="backgroundFilled"
            typeIcon="IconTranslate"
            onClick={handleTranslate}
            isSelected={showTranslate}
          />
          <Button
            onClick={onClick}
            label="Save"
            sizeName="md"
            variant="primary"
            formats="fixed"
            type="submit"
          />
        </Flex>
      </Flex>

      {showTranslate && (
        <Flex w="100%" mt="30px" mb="8px">
          <TabList
            borderBottom="none"
            _active={{ border: '0px', bg: 'transparent' }}
          >
            <Flex
              justifyContent={'flex-start'}
              alignItems="center"
              gap={'10px'}
            >
              {languages.map((value, index) => (
                <CustomTab key={index}>
                  <Box
                    borderRight={index === 0 ? '2px' : '0'}
                    borderColor="blackAlpha.100"
                    pr={index === 0 ? '10px' : '0'}
                    h="100%"
                    w="100%"
                    textTransform={"uppercase"}
                  >
                    <Tag
                      label={value}
                      isSelected={selectedItems.includes(index)}
                      onClick={() => handleTagClick(index, value)}
                    />
                  </Box>
                </CustomTab>
              ))}
            </Flex>
          </TabList>
        </Flex>
      )}
    </Flex>
  );
};
