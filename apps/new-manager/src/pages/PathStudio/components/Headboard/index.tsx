import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  ButtonIco,
  ButtonIcoGroup,
  InputText,
  TextEditable,
} from '@iseazy/react-kit';
import { ButtonMenu } from './components/ButtonMenu';
import { types } from '../../../../../../../packages/react-kit/src/shared/iconsTypes/icons';
import useSectionsStore from '../../../../store/useSectionsStore';
import { v4 as uuidv4 } from 'uuid';
import DrawerParent from '../DrawerParent/DrawerParent';
import { dataMenu } from './data/dataMenu';
import { Element } from 'src/store/interfaces/element.interface';
import { motion } from 'framer-motion';

interface HeadboardProps {
  buttonOne: boolean;
  buttonTwo: boolean;
  buttonThree: boolean;
  buttonShow: boolean;
  handleButtonCardMd: () => void;
  handleButtonCardSm: () => void;
  handleButtonTable: () => void;
  handleButtonItemGroup: () => void;
  title?: string;
  subTitle?: string;
  idSection: string;
}

export const Headboard: React.FC<HeadboardProps> = ({
  buttonOne,
  buttonShow,
  buttonThree,
  buttonTwo,
  handleButtonCardMd,
  handleButtonCardSm,
  handleButtonItemGroup,
  handleButtonTable,
  idSection,
  subTitle,
  title,
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
  } = useSectionsStore((state) => ({
    sections: state.sections,
    addElement: state.addElement,
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
    const dataSection = modifySection(idSection);

    handleAddElement(dataSection?.sectionId, title.toLowerCase());
  };

  const handleAddElement = (sectionId: string, title: any) => {
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
        size: 100,
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

  const onChangeFuncHeading = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setSectionName(event.target.value);
    updateSectionName(IdSectionSelected, event.target.value);
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
        >
          <motion.div
            initial="hidden" // Estado inicial
            animate={isScrolled ? 'visible' : 'exit'} // Estado cuando está visible o cuando se oculta
            variants={variants} // Aplicar las variantes definidas
          >
            <Flex
              justifyContent={isMobile ? 'center' : 'space-between'}
              alignItems="center"
              transition=" .3s ease-in-out"
              flexWrap="wrap"
              gap={['24px', '']}
              width="full"
              background={'primary'}
              pt={'30px'}
              pb="20px"
            >
              <Flex gap="12px" alignItems="center">
                <Heading size={'sm'} mr={'5px'}>
                  {title ?? 'Contents'}
                </Heading>

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

              <Flex
                gap="15px"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
              >
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
      >
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
            <Box width="215px" height={'50px'}>
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

          <Heading size="sm" fontWeight="bold" letterSpacing="-0.6px" ml="5px">
            {sectionContent?.elements.length !== undefined
              ? sectionContent.elements.length
              : 0}{' '}
            Cards
          </Heading>
        </Flex>
      </Box>
    </>
  );
};
