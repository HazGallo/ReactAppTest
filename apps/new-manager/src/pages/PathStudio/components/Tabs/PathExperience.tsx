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
  selectorMark,
  selectorStart,
  selectorPathData,
  dataModule,
} from './data/dataMenu';

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

  //manejo del estado de los inputs del moduleSelector
  const [markValue, setMarkValue] = useState('');
  const [attemptsValue, setAttemptsValue] = useState('');
  const [attemptsValueGame, setAttemptsValueGame] = useState('');

  const handleMarkInputChange = (value: string) => {
    setMarkValue(value);
  };

  const handleAttemptsInputChange = (value: string) => {
    setAttemptsValue(value);
  };
  const handleAttemptsInputGame = (value: string) => {
    setAttemptsValueGame(value);
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
          Efficient Strategies for Retail Success
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
          <Heading size={'xl'}>Efficient Strategies for Retail Success</Heading>
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
              valueHeading={'Test'}
              valueText={
                'Test the user knowledge and make sure the content sticks. Unlock the assessment start mode for even more user knowledge data.'
              }
              readOnly={true}
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
                      selectorData={selectorMark}
                      type={'sm'}
                      selectionType={'single'}
                      selectedDefault={1}
                    />
                    <InputText
                      hasError={false}
                      placeholder="Custom Mark"
                      sizes="md"
                      value={markValue}
                      onChange={(e) => handleMarkInputChange(e.target.value)}
                    />
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
                      selectorData={selectorAttempts}
                      type={'sm'}
                      selectionType={'single'}
                      selectedDefault={1}
                    />
                    <InputText
                      hasError={false}
                      placeholder="Custom attempts"
                      sizes="md"
                      value={attemptsValue}
                      onChange={(e) =>
                        handleAttemptsInputChange(e.target.value)
                      }
                    />
                  </Grid>
                </GridItem>
              </Grid>
            </ModuleSelector>

            <ModuleSelector
              placeholder={'Title'}
              dataMenu={dataModule}
              valueHeading={'Game'}
              valueText={`Allow users to compete in the path's knowledge-based game. Unlock the initial game start mode for even more user engagement.`}
              readOnly={true}
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
                      selectorData={selectorAttempts}
                      type={'sm'}
                      selectionType={'single'}
                      selectedDefault={1}
                    />

                    <InputText
                      hasError={false}
                      placeholder="Custom attempts"
                      sizes="md"
                      value={attemptsValueGame}
                      onChange={(e) => handleAttemptsInputGame(e.target.value)}
                    />
                  </Grid>
                </GridItem>
              </Grid>
            </ModuleSelector>
            <ModuleSelector
              placeholder={'Title'}
              dataMenu={arrayTitle}
              valueHeading={'Additional Materials'}
              valueText={
                'Complement your path with extra non-mandatory contents'
              }
              readOnly={true}
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
                How will it start?
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
                  selectorData={selectorStart}
                  type={'selectorBig'}
                  selectionType={'multipleChoice'}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
