import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  ButtonIco,
  ButtonIcoGroup,
  DropdownMenu,
  InputText,
  TextEditable,
} from '@iseazy/react-kit';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Element } from 'src/store/interfaces/element.interface';
import { v4 as uuidv4 } from 'uuid';
import { types } from '../../../../../packages/react-kit/src/shared/iconsTypes/icons';
import useSectionsStore from '../../store/useSectionsStore';
import { Section } from '../PathStudio/hooks/interfaces/section.interface';
import { useUpdateSection } from '../PathStudio/hooks/useUpdateSection';
import DrawerParent from './../PathStudio/components/DrawerParent/DrawerParent';
import { ButtonMenu } from './components/ButtonMenu';
import { dataMenu } from './data/dataMenu';

interface HeadboardProps {
  buttonOne?: boolean;
  buttonTwo?: boolean;
  buttonThree?: boolean;
  buttonShow?: boolean;
  handleButtonCardMd?: () => void;
  handleButtonCardSm?: () => void;
  handleButtonTable?: () => void;
  handleButtonItemGroup?: () => void;
  title?: string;
  subTitle?: string;
  idSection?: string;
  areaSection?: boolean;
  titleHeader?: string;
  contentImport?: boolean;
  counter?: number;
}

export const Headboard: React.FC<HeadboardProps> = ({
  buttonOne,
  buttonShow,
  buttonThree,
  counter = 0,
  buttonTwo,
  handleButtonCardMd,
  handleButtonCardSm,
  handleButtonItemGroup,
  handleButtonTable,
  idSection,
  subTitle,
  title,
  areaSection = true,
  titleHeader,
  contentImport,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 1110px)');
  const [isScrolled, setIsScrolled] = useState(false);

  const {
    addElement,
    IdSectionSelected,
    modifySection,
    updateSectionName,
    sectionContents,
    sections,
    updateSectionContents,
  } = useSectionsStore((state) => ({
    sections: state.sections,
    addElement: state.addElement,
    updateSectionContents: state.updateSectionContents,
    IdSectionSelected: state.IdSectionSelected,
    modifySection: state.modifySection,
    updateSectionName: state.updateSectionName,
    sectionContents: state.sectionContents,
  }));

  const [sectionName, setSectionName] = useState(subTitle || '');

  const sectionContent = sectionContents.find(
    (s) => s.idSection === IdSectionSelected
  );

  const buttonData = [
    {
      typeIcon: 'IconCardBig',
      ariaLabel: 'buttonIcoNumberOne',
      onclick: handleButtonCardMd,
      selected: buttonOne,
    },
    {
      typeIcon: 'IconCardSmall',
      ariaLabel: 'buttonIcoNumberTwo',
      onclick: handleButtonCardSm,
      selected: buttonTwo,
    },
    {
      typeIcon: 'IconBullets',
      ariaLabel: 'buttonIcoNumberThree',
      onclick: handleButtonTable,
      selected: buttonThree,
    },
  ];

  const onSeletedChange = (title: string) => {
    if (idSection) {
      const dataSection = modifySection(idSection);
      handleAddElement(dataSection?.sectionId, title.toLowerCase());
    }
  };

  const handleAddElement = (sectionId: string, title: any) => {
    updateSectionContents(sectionId, [
      {
        id: uuidv4(),
        coverImage: '',
        type: title,
      },
    ]);

    const newElement: Element = {
      uid: uuidv4(),
      type: {
        title: title,
        is_active: true,
      },
      points: 8,
      author_uid: '80df36f5-7d7d-35ca-a13f-4d121ae0dd6c',
      tags: [
        {
          tag_uid: 'bb9c06d1-7762-38a7-afb5-8bebe6d6b266',
        },
      ],
      topic_weights: [
        {
          topic_uid: '7d364613-edc1-36ee-a024-9a72598a4595',
          weight: 100,
        },
      ],
      translations: [
        {
          title: '',
          description: '',
          is_Default: true,
          language: 'en',
          asset: {
            filePath: '',
            cdnUrl: null,
            mimeType: 'image/png',
            size: 0,
            sizeFormatted: '20 ',
            imageAsset: null,
            isCompressed: false,
            id: 1254,
            uid: '01898cac-5616-77a7-8a05-03d0d5c96435',
            type: 'image',
            createdAt: '2023-07-25T10:50:51+00:00',
            updatedAt: '2023-07-25T10:50:51+00:00',
            deleted: false,
            deletedAt: null,
            active: true,
          },
        },
      ],
      cover: {
        filePath: '',
        cdnUrl: null,
        mimeType: 'image/png',
        size: 0,
        sizeFormatted: '100 ',
        imageAsset: null,
        isCompressed: false,
        id: 1253,
        uid: '01898cac-5610-7930-8903-0c5ca6f6202e',
        type: 'file',
        createdAt: '2023-07-25T10:50:51+00:00',
        updatedAt: '2023-07-25T10:50:51+00:00',
        deleted: false,
        deletedAt: null,
        active: true,
      },
      newCard: true,
    };

    addElement(sectionId ?? IdSectionSelected, newElement);
  };

  const option = [
    {
      title: 'Import Template',
      categoryTitle: 'Category 1',
      icon: 'IconDownload',
    },
  ];

  const [download, setDownload] = useState(false);

  const handleDownload = () => {
    setDownload(!download);
  };

  const handleDownloadExcel = () => {
    window.location.href = '../../../public/questionsExcel.xlsx';
  };

  const onMutationUpdateSectionSuccess = (section: Section) => {};

  const updateSectionMutation = useUpdateSection(
    onMutationUpdateSectionSuccess
  );

  const updateTitleSection = (sectionId: string, title: string) => {
    updateSectionMutation.mutate({
      id: sectionId,
      title,
    });
  };

  const onChangeFuncHeading = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setSectionName(event.target.value);

    updateSectionName(IdSectionSelected, event.target.value);
    updateTitleSection(IdSectionSelected, event.target.value);
  };

  useEffect(() => {
    setSectionName(subTitle || '');
  }, [subTitle]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const scrollSection = document.getElementById('scrollSection');

    const handleScroll = () => {
      if (scrollSection) {
        const isSectionScrolled = scrollSection.scrollTop > 240; // Puedes ajustar este valor según tus necesidades
        setIsScrolled(isSectionScrolled);
      }
    }; // El tiempo en milisegundos que controla la frecuencia de ejecución

    if (scrollSection) {
      scrollSection.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollSection) {
        scrollSection.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const [showFlex, setShowFlex] = useState(true);

  const variants = {
    hidden: { y: -100, opacity: 0, transition: { duration: 0.2 } }, // Aumento la duración aquí
    visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
    exit: { y: -100, opacity: 0, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    setTimeout(() => {
      if (isScrolled) {
        setShowFlex(true);
      }
    }, 50);
  }, [isScrolled]);

  return (
    <>
      <DrawerParent
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        type={'DrawerFilter'}
      />

      {showFlex && (
        <Box
          width="full"
          transition=" .3s ease-in-out"
          sx={{
            position: 'sticky',
            top: '-73',
            zIndex: 2,
            width: '100%',
            h: '20px',
          }}
          //  px="0.5em"
        >
          <motion.div
            initial="hidden" // Estado inicial
            animate={isScrolled ? 'visible' : 'exit'} // Estado cuando está visible o cuando se oculta
            variants={variants} // Aplicar las variantes definidas
          >
            {titleHeader && (
              <Text textStyle={'sm'} color="neGrey.700">
                {titleHeader}
              </Text>
            )}

            <Flex
              justifyContent={isMobile ? 'center' : 'space-between'}
              alignItems="center"
              transition=" .3s ease-in-out"
              flexWrap="wrap"
              gap={['24px', '']}
              width="full"
              background={'primary'}
              pt={'30px'}
              pb={['10px', '20px']}
            >
              <Flex gap="12px" alignItems="center" w="250px">
                <Heading size={'sm'} mr={'5px'}>
                  {title ?? 'Contents'}
                </Heading>

                {areaSection && (
                  <>
                    <Box>
                      <ButtonIco
                        sizeName="md"
                        warning={false}
                        isDisabled={false}
                        backgroundType="backgroundFilled"
                        typeIcon="IconList"
                        display="flex"
                        isSelected={buttonShow}
                        onClick={handleButtonItemGroup}
                        aria-label={''}
                      />
                    </Box>

                    <Box h="38px" w="200px">
                      <TextEditable
                        hasError={false}
                        sizesType="sm"
                        errorMessage="error message"
                        placeholder={'New section'}
                        maxRows={1}
                        setValue={setSectionName}
                        value={sectionName}
                        onChange={onChangeFuncHeading}
                        readOnly={title === 'Test Questions' ? true : false}
                      >
                        <Heading
                          size="sm"
                          noOfLines={1}
                          lineHeight="unset"
                          userSelect="none"
                        >
                          {sectionName ? sectionName : 'New section'}
                        </Heading>
                      </TextEditable>
                    </Box>
                  </>
                )}
              </Flex>

              <Flex
                gap="15px"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
                {title === 'Test Questions' ? (
                  <Heading
                    size="sm"
                    fontWeight="bold"
                    letterSpacing="-0.6px"
                    ml="5px"
                  >
                    {counter + '   '}
                    Questions
                  </Heading>
                ) : (
                  <Heading
                    size="sm"
                    fontWeight="bold"
                    letterSpacing="-0.6px"
                    ml="5px"
                  >
                    {sectionContent?.elements.length !== undefined
                      ? sectionContent.elements.length
                      : 0}{' '}
                    Cards
                  </Heading>
                )}

                <Box width="215px" height={''}>
                  <InputText
                    onChange={() => {}}
                    hasError={false}
                    placeholder="Find"
                    iconRight="IconSearch"
                    sizes={'md'}
                  />
                </Box>

                <ButtonIco
                  sizeName={'md'}
                  warning={false}
                  isDisabled={false}
                  backgroundType="backgroundFilled"
                  typeIcon="IconFilters"
                  onClick={() => onOpen()}
                  aria-label={''}
                />

                <ButtonIcoGroup width={'120px'}>
                  {buttonData.map((value, index) => (
                    <ButtonIco
                      key={index}
                      sizeName={'md'}
                      warning={false}
                      isDisabled={false}
                      readOnly={false}
                      typeIcon={value.typeIcon as types}
                      aria-label={value.ariaLabel}
                      backgroundType="noBackground"
                      isSelected={value.selected}
                      onClick={value.onclick}
                    />
                  ))}
                </ButtonIcoGroup>
                <ButtonMenu
                  dataMenu={dataMenu}
                  categoryType="noCategory"
                  positioning={'right'}
                  onSeletedChange={onSeletedChange}
                  isOpen={false}
                  warning={false}
                  isScrolled={isScrolled || isMobile}
                />
              </Flex>
            </Flex>
          </motion.div>
        </Box>
      )}

      <Box
        pb="20px"
        width="full"
        transition=" .3s ease-in-out"
        sx={{
          position: 'static',
          width: '100%',
        }}
        px="0.5em"
      >
        {titleHeader && (
          <Text textStyle={'md'} color="neGrey.700">
            {titleHeader}
          </Text>
        )}
        <Flex
          justifyContent={isMobile ? 'center' : 'space-between'}
          alignItems="center"
          transition=" .3s ease-in-out"
          flexWrap="wrap"
          gap={['24px', '']}
          width="full"
        >
          <Flex gap="12px" alignItems="center">
            <Heading size={isMobile ? 'sm' : 'XL'} mr={'0px'}>
              {title ?? 'Contents'}
            </Heading>
          </Flex>

          <Flex
            gap="15px"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <Box width="215px" height={isMobile ? '40px' : '50px'}>
              <InputText
                onChange={() => {}}
                hasError={false}
                placeholder="Find"
                iconRight="IconSearch"
                sizes={isMobile ? 'md' : 'lg'}
              />
            </Box>

            <ButtonIco
              sizeName={isMobile ? 'md' : 'lg'}
              warning={false}
              isDisabled={false}
              backgroundType="backgroundFilled"
              typeIcon="IconFilters"
              onClick={() => onOpen()}
              aria-label={''}
            />

            <ButtonIcoGroup width={'150px'}>
              {buttonData.map((value, index) => (
                <ButtonIco
                  key={index}
                  sizeName={isMobile ? 'md' : 'lg'}
                  warning={false}
                  isDisabled={false}
                  readOnly={false}
                  typeIcon={value.typeIcon as types}
                  aria-label={value.ariaLabel}
                  backgroundType="noBackground"
                  isSelected={value.selected}
                  onClick={value.onclick}
                />
              ))}
            </ButtonIcoGroup>

            {contentImport && (
              <DropdownMenu
                iconTypes={'IconDotsHorizontal'}
                categoryType={'noCategory'}
                positioning="center"
                dataMenu={option}
                isDisabled={false}
                onSelect={(data: any) => {
                  if (option[0].title === data) {
                    handleDownloadExcel();
                    setDownload(false);
                  }
                }}
                warning={false}
                showIcon={true}
                typeMenu={'dropdownMenuOption'}
              >
                <div>
                  <ButtonIco
                    isSelected={download}
                    backgroundType="backgroundFilled"
                    sizeName={isMobile ? 'md' : 'lg'}
                    aria-label=""
                    onClick={handleDownload}
                    typeIcon={'IconDotsHorizontal'}
                    isDisabled={false}
                  />
                </div>
              </DropdownMenu>
            )}

            <ButtonMenu
              dataMenu={dataMenu}
              categoryType="noCategory"
              positioning={'right'}
              onSeletedChange={onSeletedChange}
              isOpen={false}
              warning={false}
              isScrolled={isMobile}
            />
          </Flex>
        </Flex>

        <Flex
          marginTop="25px"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={['24px', '']}
          display="flex"
        >
          {areaSection && (
            <Flex gap="24px" alignItems="center">
              <ButtonIco
                sizeName={isMobile ? 'md' : 'lg'}
                warning={false}
                isDisabled={false}
                backgroundType="backgroundFilled"
                typeIcon="IconList"
                onClick={handleButtonItemGroup}
                isSelected={buttonShow}
                aria-label={''}
              />
              <Box h="38px" w="200px">
                <TextEditable
                  hasError={false}
                  sizesType="sm"
                  errorMessage="error message"
                  placeholder={'New section'}
                  maxRows={1}
                  setValue={setSectionName}
                  value={sectionName}
                  onChange={onChangeFuncHeading}
                  readOnly={title === 'Test Questions' ? true : false}
                >
                  <Heading
                    size="sm"
                    noOfLines={1}
                    lineHeight="unset"
                    userSelect="none"
                  >
                    {sectionName ? sectionName : 'New section'}
                  </Heading>
                </TextEditable>
              </Box>
            </Flex>
          )}

          {title === 'Test Questions' ? (
            <Heading
              size="sm"
              fontWeight="bold"
              letterSpacing="-0.6px"
              ml="5px"
            >
              {counter + '   '}
              Questions
            </Heading>
          ) : (
            <Heading
              size="sm"
              fontWeight="bold"
              letterSpacing="-0.6px"
              ml="5px"
            >
              {sectionContent?.elements.length !== undefined
                ? sectionContent.elements.length
                : 0}{' '}
              Cards
            </Heading>
          )}
        </Flex>
      </Box>
    </>
  );
};
