import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useMediaQuery,
  GridItem,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  InputText,
  Selector,
  ModuleSelector,
  SelectorSystem,
} from '@iseazy/react-kit';
import {
  arrayTitle,
  selectorAttempts,
  selectorPathData,
  dataModule,
  selectorNavigate,
  selectorModuleTest,
  valueHeadingTestInitial,
  valueTextTestInitial,
  valueHeadingGameInitial,
  valueTextGameInitial,
  valueHeadingMaterialInitial,
  valueTextMaterialInitial,
  selectorModuleGame,
} from './data/dataMenu';

import { usePersistedStore } from 'src/store/usePathListStore';
import { shallow } from 'zustand/shallow';
import { at } from 'lodash';

export type types =
  | 'SelectorPathExpress'
  | 'SelectorPathSteps'
  | 'SelectorPathWizard'
  | 'SelectorPathInstagram'
  | 'SelectorPathCourse';

interface Props {
  selectionType?: 'single' | 'multipleChoice';
}

export const PathExperience = (props: Props) => {
  const { t } = useTranslation();
  const { selectionType = 'single' } = props;

  const [isMobile] = useMediaQuery('(max-width: 1110px)');

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [valueHeading, setValueHeading] = useState(valueHeadingTestInitial);
  const [valueText, setValueText] = useState(valueTextTestInitial);
  const [valueHeadingGame, setValueHeadingGame] = useState(
    valueHeadingGameInitial
  );
  const [valueTextGame, setValueTextGame] = useState(valueTextGameInitial);
  const [valueHeadingMaterial, setValueHeadingMaterial] = useState(
    valueHeadingMaterialInitial
  );
  const [valueTextMaterial, setValueTextMaterial] = useState(
    valueTextMaterialInitial
  );

  const { seletedPathName } = usePersistedStore(
    (state) => ({
      seletedPathName: state.seletedPathName,
    }),
    shallow
  );

  useEffect(() => {
    if (selectionType === 'single') {
      setSelectedItems([0]);
    }
  }, [selectionType]);

  const handleSelect = (index: number) => {
    if (selectionType === 'multipleChoice') {
      setSelectedItems((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((itemIndex) => itemIndex !== index);
        } else {
          return [...prevSelected, index];
        }
      });
    } else {
      setSelectedItems([index]);
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // moduleSelector test Mark
  const [markValue, setMarkValue] = useState('');
  const [onselect, setOnselect] = useState(false);
  const [onselectSystem, setOnselectSystem] = useState(false);

  const onSeletedSelectorMark = () => {
    setOnselect(false);
    setOnselectSystem(false);
  };

  const onSeletedSelectorTest = () => {
    setOnselectSystem(true);
  };

  const handleMarkTitleChange = () => {
    setOnselect(true);
  };

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;

    if (!isNaN(newValue)) {
      setMarkValue(newValue);
    }
  };

  // moduleSelector test Attemps
  const [attemptsValue, setAttemptsValue] = useState('');
  const [onselectAttempts, setOnselectAttempts] = useState(false);
  const [onselectSystemAttempts, setOnselectSystemAttempts] = useState(false);

  const onSeletedSelectorAttempts = () => {
    setOnselectAttempts(false);
    setOnselectSystemAttempts(false);
  };

  const onSeletedSelectorTestAttempts = () => {
    setOnselectSystemAttempts(true);
  };

  const handleAttemptsTitleChange = () => {
    setOnselectAttempts(true);
  };

  const handleInputChangeAttempts = (event: any) => {
    const newValue = event.target.value;

    if (!isNaN(newValue)) {
      setAttemptsValue(newValue);
    }
  };

  // moduleSelector Game Attempts
  const [gameAttemptsValue, setGameAttemptsValue] = useState('');
  const [isGameAttemptsSelected, setIsGameAttemptsSelected] = useState(false);
  const [isGameAttemptsSystemSelected, setIsGameAttemptsSystemSelected] =
    useState(false);

  const deselectGameAttempts = () => {
    setIsGameAttemptsSelected(false);
    setIsGameAttemptsSystemSelected(false);
  };

  const selectGameAttemptsSystem = () => {
    setIsGameAttemptsSystemSelected(true);
  };

  const gameAttemptsTitleChange = () => {
    setIsGameAttemptsSelected(true);
  };

  const handleGameAttemptsInputChange = (event: any) => {
    const newValue = event.target.value;

    if (!isNaN(newValue)) {
      setGameAttemptsValue(newValue);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: isScrolled ? 'sticky' : 'static',
          top: '70px',
          zIndex: 10,
          background: 'primary',
          width: isScrolled ? '100%' : '100%',
          height: isScrolled && !isMobile ? '' : '',
        }}
        px="14%"
      >
        <Heading
          size={'md'}
          display={isScrolled ? 'inherit' : 'none'}
          py="20px"
        >
          {seletedPathName}
        </Heading>
      </Box>

      <Flex
        pt="165px"
        flexDir={'column'}
        bg="primary"
        userSelect={'none'}
        width={['85%', '71%']}
        margin="auto"
      >
        <Flex
          justifyContent="center"
          flexDir={'column'}
          alignItems={isMobile ? 'center' : 'normal'}
        >
          <Heading size={'xl'}>{seletedPathName}</Heading>
          <Heading size={'md'} mt="40px">
            {t('TR_PATH_TITLE_TYPE')}
          </Heading>

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
            gap="20px"
            justifyContent="center"
            mt="25px"
            w="100%"
          >
            {selectorPathData.map((value, index) => (
              <Selector
                key={index}
                type={value.type as types}
                title={''}
                isSelected={selectedItems.includes(index)}
                onClick={() => handleSelect(index)}
              />
            ))}
          </Grid>

          <Heading size={'md'} mt="40px">
            {t('TR_PATH_TITLE_MODULES')}
          </Heading>

          <Box
            w={'full'}
            mt="25px"
            gap={'25px'}
            display="flex"
            flexDir={'column'}
            flexWrap={'wrap'}
            justifyContent="center"
          >
            <ModuleSelector
              placeholder={'Title'}
              dataMenu={arrayTitle}
              readOnly={true}
              setValueText={setValueText}
              valueText={valueText}
              setValueHeading={setValueHeading}
              valueHeading={valueHeading}
            >
              <Grid
                columnGap="50px"
                rowGap="20px"
                h="full"
                width={'full'}
                pt="20px"
                templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
              >
                <GridItem>
                  <Text textStyle={'lg'} mb="8px">
                    Set the cut-off mark
                  </Text>

                  <Grid
                    templateColumns={{
                      base: 'repeat(2, 1fr)',
                      sm: 'repeat(4, 1fr)',
                    }}
                    gap="20px"
                    justifyContent="center"
                  >
                    <SelectorSystem
                      selectorData={selectorModuleTest?.selectorsMark}
                      type={'sm'}
                      selectionType={'single'}
                      disableUnselected={onselectSystem ? false : onselect}
                      onSeleted={onSeletedSelectorTest}
                    />
                    {!onselect && !onselectSystem ? (
                      <InputText
                        hasError={false}
                        placeholder="Custom"
                        sizes="md"
                        value={markValue}
                        onChange={handleInputChange}
                        onEnterPress={handleMarkTitleChange}
                      />
                    ) : (
                      <Selector
                        title={markValue}
                        type={'sm'}
                        isSelected={onselectSystem ? false : onselect}
                        onClick={onSeletedSelectorMark}
                      />
                    )}
                  </Grid>
                </GridItem>

                <GridItem>
                  <Text textStyle={'lg'} mb="8px">
                    Set the available attempts
                  </Text>

                  <Grid
                    templateColumns={{
                      base: 'repeat(2, 1fr)',
                      sm: 'repeat(4, 1fr)',
                    }}
                    gap="20px"
                    justifyContent="center"
                  >
                    <SelectorSystem
                      selectorData={selectorModuleTest?.selectorsAttemts}
                      type={'sm'}
                      selectionType={'single'}
                      disableUnselected={
                        onselectSystemAttempts ? false : onselectAttempts
                      }
                      onSeleted={onSeletedSelectorTestAttempts}
                    />

                    {!onselectAttempts && !onselectSystemAttempts ? (
                      <InputText
                        hasError={false}
                        placeholder="Custom"
                        sizes="md"
                        value={attemptsValue}
                        onChange={handleInputChangeAttempts}
                        onEnterPress={handleAttemptsTitleChange}
                      />
                    ) : (
                      <Selector
                        title={attemptsValue}
                        type={'sm'}
                        isSelected={
                          onselectSystemAttempts ? false : onselectAttempts
                        }
                        onClick={onSeletedSelectorAttempts}
                      />
                    )}
                  </Grid>
                </GridItem>
              </Grid>
            </ModuleSelector>

            <ModuleSelector
              placeholder={'Title'}
              dataMenu={dataModule}
              readOnly={true}
              setValueText={setValueTextGame}
              valueText={valueTextGame}
              setValueHeading={setValueHeadingGame}
              valueHeading={valueHeadingGame}
            >
              <Grid
                gap="50px"
                h="full"
                width={'full'}
                pt="20px"
                templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
              >
                <GridItem>
                  <Text textStyle={'lg'} mb="8px">
                    Set the available attempts
                  </Text>

                  <Grid
                    templateColumns={{
                      base: 'repeat(2, 1fr)',
                      sm: 'repeat(4, 1fr)',
                    }}
                    gap="20px"
                    justifyContent="center"
                  >
                    <SelectorSystem
                      selectorData={selectorModuleGame?.selectorsAttemts}
                      type={'sm'}
                      selectionType={'single'}
                      selectedDefault={1}
                      disableUnselected={
                        isGameAttemptsSystemSelected
                          ? false
                          : isGameAttemptsSelected
                      }
                      onSeleted={selectGameAttemptsSystem}
                    />
                    {!isGameAttemptsSelected &&
                    !isGameAttemptsSystemSelected ? (
                      <InputText
                        hasError={false}
                        placeholder="Custom"
                        sizes="md"
                        value={gameAttemptsValue}
                        onChange={handleGameAttemptsInputChange}
                        onEnterPress={gameAttemptsTitleChange}
                      />
                    ) : (
                      <Selector
                        title={gameAttemptsValue}
                        type={'sm'}
                        isSelected={
                          isGameAttemptsSystemSelected
                            ? false
                            : isGameAttemptsSelected
                        }
                        onClick={deselectGameAttempts}
                      />
                    )}
                  </Grid>
                </GridItem>
              </Grid>
            </ModuleSelector>
            <ModuleSelector
              placeholder={'Title'}
              dataMenu={arrayTitle}
              readOnly={true}
              setValueText={setValueTextMaterial}
              valueText={valueTextMaterial}
              setValueHeading={setValueHeadingMaterial}
              valueHeading={valueHeadingMaterial}
            />
          </Box>

          <Heading size={'md'} mt="50px">
            Last details
          </Heading>

          <Box
            display={'flex'}
            justifyContent={isMobile ? 'center' : 'flex-start'}
            flexWrap={'wrap'}
            gap="50px"
            mb="50px"
            h="100%"
          >
            <Box
              display={'flex'}
              justifyContent="flex-start"
              alignItems={isMobile ? 'center' : 'normal'}
              flexDir={'column'}
            >
              <Text textStyle={'lg'} mt="25px" color={'neGrey.600'}>
                How will users navigate it?
              </Text>
              <Box
                display={'flex'}
                justifyContent={'center'}
                flexWrap={'wrap'}
                gap="20px"
                mt="25px"
                h="100%"
              >
                <SelectorSystem
                  selectorData={selectorNavigate}
                  type={'selectorBig'}
                  selectionType={'single'}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
