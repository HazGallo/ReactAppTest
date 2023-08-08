import { useState, useMemo, memo } from 'react'; // Import useMemo and memo

import { Box, Flex, FormControl, Heading } from '@chakra-ui/react';

import {
  ImageSelector,
  InputDropdown,
  SelectorSystem,
  Switch,
  TagSystem,
} from '@iseazy/react-kit';

import useSectionsStore from 'src/store/useSectionsStore';
import DrawerDocument from './DrawerDocument';

const arrayTitle = [
  {
    title: 'Dropdown option1',
    categoryTitle: 'Category 1',
    icon: 'IconTask',
  },
  {
    title: 'Dropdown option2',
    categoryTitle: 'Category 1',
    icon: 'IconChallenge',
  },
  {
    title: 'Dropdown option3',
    categoryTitle: 'Category 2',
    icon: 'IconSend',
  },
  {
    title: 'Dropdown option4',
    categoryTitle: 'Category 2',
    icon: 'IconPoll',
  },
];

interface Props {
  onClose: () => void;
  isScrolled?: boolean;
}

// Wrap InteractiveForm with memo to optimize rendering
const InteractiveForm = memo((props: Props) => {
  const { onClose, isScrolled } = props;

  // useMemo to prevent unnecessary recalculations of cardElementSelected
  const cardElementSelected = useSectionsStore(
    (state) => state.cardElementSelected
  );

  const [isFileUploaded, setIsFileUploaded] = useState(true);
  const [checked, setChecked] = useState(false);

  const onChangeImageSelector = () => {
    console.log('onChangeImageSelector');
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  const selectorNavigate = [
    {
      typeIcon: 'IconPointsLow',
      title: '1.000',
    },
    {
      typeIcon: 'IconPointsMidLow',
      title: '2.000',
    },
    {
      typeIcon: 'IconPointsMidHigh',
      title: '5.000',
    },
    {
      typeIcon: 'IconPointsHigh',
      title: '10.000',
    },
  ];

  const [showTranslate, setShowTranslate] = useState(false);

  const handleTranslate = () => {
    setShowTranslate(!showTranslate);
  };

  return (
    <Box position={'relative'} >
      <FormControl>
        <DrawerDocument
          onClose={onClose}
          handleTranslate={handleTranslate}
          showTranslate={showTranslate}
        />
      </FormControl>

      {!showTranslate && (
        <Flex flexDirection="column" gap="5" mx="25px">
          <Heading size="sm">Make it pop!</Heading>
          <Box mt="2px">
            <Box position="relative" width={'364px'} height={'225px'}>
              <ImageSelector
                maxFiles={1}
                maxSize={10 * 1000 * 1000}
                type="image"
                placeholderSrc={cardElementSelected?.cover.filePath}
                warning={false}
                isDisabled={false}
                hasError={false}
                errorMessage="Error Message"
                onDrop={(files: any) => {
                  console.log({ files });
                }}
                onChangeProgress={setIsFileUploaded}
                progressChange={true}
                onChange={onChangeImageSelector}
                onSelect={onChangeImageSelector}
              />
            </Box>
          </Box>

          <Flex
            w="100%"
            paddingTop="20px"
            paddingBottom="5px"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="sm">Complete by access</Heading>
            <Switch sizes="md" checked={checked} onClick={handleToggle} />
          </Flex>
          <Heading marginTop="25px" size="sm">
            Topic
          </Heading>
          <Box>
            <InputDropdown
              dataMenu={arrayTitle}
              categoryTitle=""
              sizeInput="lg"
              showIcon={true}
              categoryType="noCategory"
              iconTypes="IconGhost"
            />
          </Box>
          <Heading marginTop="25px" size="sm">
            Increase its engagement
          </Heading>
          <Box
            marginBottom="10px"
            display={'flex'}
            justifyContent={'flex-start'}
            flexWrap={'wrap'}
            gap="15px"
          >
            <SelectorSystem
              selectorData={selectorNavigate}
              type={'md'}
              selectionType={'single'}
            />
          </Box>

          <Heading size="sm">Tag and find it</Heading>
          <Box marginBottom="50px">
            <TagSystem isDisabled={false} type="writting" warning={false} />
          </Box>
        </Flex>
      )}
    </Box>
  );
});

export default InteractiveForm;
