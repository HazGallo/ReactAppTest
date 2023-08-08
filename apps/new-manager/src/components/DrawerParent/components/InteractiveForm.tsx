import { Box, Flex, FormControl, Heading } from '@chakra-ui/react';
import { ImageSelector, InputDropdown, TagSystem } from '@iseazy/react-kit';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

import CreateVideo from './CreateVideo';
import { useSettings } from '../../../store/settingsStore';

const arrayTitle = [
  {
    title: 'Dropdown option1',
    categoryTitle: 'Category 1',
    icon: "IconTask"
  },
  {
    title: 'Dropdown option2',
    categoryTitle: 'Category 1',
    icon: "IconChallenge"
  },
  {
    title: 'Dropdown option3',
    categoryTitle: 'Category 2',
    icon: "IconSend"
  },
  {
    title: 'Dropdown option4',
    categoryTitle: 'Category 2',
    icon: "IconPoll"
  }
];

interface Props {
  onClose: () => void;
}

const InteractiveForm = (props: Props) => {
  const { onClose } = props;
  const { InfoCardDrawer } = useSettings(
    (state) => ({ InfoCardDrawer: state.InfoCardDrawer }),
    shallow
  );
  const [isFileUploaded, setIsFileUploaded] = useState(true);

  const onChangeImageSelector = () => {
    console.log('onChangeImageSelector');
  };

  return (
    <Box position={'relative'}>
      <FormControl>
        <CreateVideo onClose={onClose} />
      </FormControl>

      <Flex flexDirection="column" gap="5">
        <Heading size="sm">Make it pop!</Heading>
        <Box mt="2px">
          <Box position="relative" width={'364px'} height={'225px'}>
            <ImageSelector
              maxFiles={1}
              maxSize={10 * 1000 * 1000}
              type="image"
              placeholderSrc={InfoCardDrawer.coverimage}
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
          Tag and find it
        </Heading>
        <Box marginBottom="50px">
          <TagSystem isDisabled={false} type="writting" warning={false} />
        </Box>
      </Flex>
    </Box>
  );
};

export default InteractiveForm;
