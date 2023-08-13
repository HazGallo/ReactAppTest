import { useEffect, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Flex,
  Heading,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import {
  FileDropper,
  InputText,
  SelectorSystem,
  Switch,
  TextEditable,
} from '@iseazy/react-kit';

import isEqual from 'lodash/isEqual';
import { shallow } from 'zustand/shallow';

// please avoid using relative paths, use absolute paths instead
import { InputTextArea } from '../../../../../../../../packages/react-kit/src/components/InputTextArea';

import useSectionsStore from 'src/store/useSectionsStore';

import { useFileDropper } from '../hooks/useFileDropper';
import { uploadFile } from '../interface/uploadFile';
import { HeaderDrawer } from './HeaderDrawer';

import { cleanHtml } from '../utils/clearHtml.helper';
import { getFirstErrorMessage, hasFieldError } from '../utils/formik.helper';

import { DEFAULT_TRANSLATION, LANGUAGES, SELECTORS } from '../constants';

interface Props {
  onClose?: () => void;
  handleTranslate?: () => void;
  showTranslate?: boolean;
  isScrolled?: boolean;
}

const DrawerDocument = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [customInput, setCustomInput] = useState('Custom');

  const { onClose, handleTranslate, showTranslate, isScrolled } = props;

  const { cardElementSelected, sectionContents, IdSectionSelected } =
    useSectionsStore(
      (state) => ({
        cardElementSelected: state.cardElementSelected,
        sectionContents: state.sectionContents,
        IdSectionSelected: state.IdSectionSelected,
      }),
      shallow
    );

  const { updateElement, updateCardElementSelected } = useSectionsStore(
    (state) => ({
      updateElement: state.updateElement,
      updateCardElementSelected: state.updateCardElementSelected,
    })
  );

  const handleTabChange = (lenguage: string) => {
    setSelectedLanguage(lenguage);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Campo obligatorio'),
    description: Yup.string().required('Campo obligatorio'),
  });

  const combinedTranslations = (cardElementSelected: any) => {
    if (!cardElementSelected || !cardElementSelected.translations) {
      return LANGUAGES.map((language) => ({
        language,
        ...DEFAULT_TRANSLATION,
      }));
    }

    const existingTranslations = cardElementSelected.translations;
    const translationsMap = new Map(
      existingTranslations.map((t: any) => [t.language, t])
    );

    return LANGUAGES.map((language) => ({
      language,
      ...DEFAULT_TRANSLATION,
      ...(translationsMap.get(language) || {}),
    }));
  };

  const formik = useFormik({
    initialValues: {
      uid: cardElementSelected?.uid,
      translations: cardElementSelected
        ? [
            {
              title: cardElementSelected.translations[0].title,
              description: cardElementSelected.translations[0].description,
            },
            ...combinedTranslations(cardElementSelected).slice(1),
          ]
        : combinedTranslations(cardElementSelected),
    },

    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (!dataVideo?.path) {
        setHasError(true);
        setErrorMessage('El campo es requerido');
      } else {
        if (values.uid === null) {
          setHasError(false);
          setErrorMessage('');
        }
      }
    },
  });

  const {
    mutate: mutateUploadVideo,
    error,
    data: dataVideo,
  } = useFileDropper();

  useEffect(() => {
    if (!dataVideo?.path && error) {
      setHasError(true);
      setErrorMessage('El campo es requerido');
    } else {
      setHasError(false);
      setErrorMessage('');
    }
  }, [dataVideo, error]);

  const uploadFile = (file: any) => {
    setIsFileUploaded(true);
    mutateUploadVideo({ path: file });
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  const fileRef = useRef<any>();
  const [fileState, setFileState] = useState<uploadFile | null>(null); // Inicializar state

  const handleFileAttributes = (fileData: uploadFile) => {
    //if new file is different from the previous one, update state
    if (!isEqual(fileState, fileData)) {
      fileRef.current = fileData;
      setFileState(fileData);
    }
  };

  const handleSaveDataCard = () => {
    updateElement(IdSectionSelected, cardElementSelected?.uid, {
      ...cardElementSelected,
      translations: formik.values.translations,
    });

    updateCardElementSelected({
      ...cardElementSelected,
      translations: formik.values.translations,
    });
  };

  const handleCustomInput = (value: string) => {
    setCustomInput(value);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Tabs isLazy m="0px" p="0px">
        <Box
          borderBottom="1px"
          borderColor="blackAlpha.50"
          _dark={{
            borderColor: 'whiteAlpha.50',
          }}
          display="flex"
          w="full"
          h={showTranslate ? '' : '74px'}
          justifyContent="space-between"
          position={'fixed'}
          zIndex="10"
          bg="primary"
          px={'25px'}
          top={'0px'}
          py={'17px'}
        >
          <HeaderDrawer
            disabled={false}
            onClose={onClose}
            handleTranslate={handleTranslate}
            showTranslate={showTranslate}
            onClick={handleSaveDataCard}
            languages={LANGUAGES}
          />
        </Box>

        {showTranslate && (
          <TabPanels m="0px" p="0px">
            {formik.values?.translations &&
              formik.values?.translations.map(
                (translation: any, index: number) => (
                  <TabPanel mb="0px" mt="180px" mx="25px" p="0px" key={index}>
                    <Box mt="50px">
                      <Heading size={'lg'}>Title & Description</Heading>
                    </Box>
                    <Box w="100%" mt="20px">
                      <InputText
                        placeholder={'title'}
                        value={translation.title}
                        onChange={(e) => {
                          formik.setFieldValue(
                            `translations[${index}].title`,
                            e.target.value
                          );
                        }}
                        hasError={false}
                      />
                    </Box>
                    <Box w="100%" h="100%" mt="20px">
                      <InputTextArea
                        isDisabled={false}
                        warning={false}
                        typeResize={'vertical'}
                        placeholder="Description"
                        value={translation.description}
                        onChange={(value: string) => {
                          formik.setFieldValue(
                            `translations[${index}].description`,
                            value
                          );
                        }}
                      />
                    </Box>

                    {!checked && (
                      <>
                        <Flex w="100%" mt="20px">
                          <Heading size="lg">Content</Heading>
                        </Flex>
                        <Flex
                          marginTop="25px"
                          marginBottom={
                            cardElementSelected?.type.title === 'Video' ||
                            cardElementSelected?.type.title === 'Audio'
                              ? '50px'
                              : '20px'
                          }
                          w="100%"
                        >
                          <FileDropper
                            onChangeProgress={setIsFileUploaded}
                            progressChange={isFileUploaded}
                            type={cardElementSelected?.type?.title.toLowerCase()}
                            isDisabled={false}
                            errorMessage={errorMessage}
                            hasError={hasError}
                            warning={false}
                            maxFiles={1}
                            maxSize={10 * 1000 * 1000}
                            onChange={uploadFile}
                            onDrop={(files: any) => {
                              console.log({ files });
                            }}
                            setFileAttributes={handleFileAttributes}
                          />
                        </Flex>
                      </>
                    )}
                  </TabPanel>
                )
              )}
          </TabPanels>
        )}
      </Tabs>

      {!showTranslate && (
        <Box mx="25px" mt="100px">
          <Box w="100%" marginTop="20px">
            <TextEditable
              errorMessage={getFirstErrorMessage(formik, 'title')}
              readOnly={false}
              sizesType="XL"
              onChange={(event) =>
                formik.setFieldValue(
                  `translations[${0}].title`,
                  event.target.value
                )
              }
              setValue={(value) =>
                formik.setFieldValue(`translations[${0}].title`, value)
              }
              onBlur={formik.handleBlur}
              value={formik.values?.translations[0]?.title ?? ''}
              hasError={hasFieldError(formik, 'title')}
              placeholder="New Video"
              maxRows={1000}
              scrollbar={false}
              fieldName="title"
            >
              <Heading size="XL" noOfLines={[1000, 1000]} lineHeight="unset">
                {formik.values?.translations[0]?.title || 'New Video'}
              </Heading>
            </TextEditable>
          </Box>
          <Box>
            <TextEditable
              errorMessage={getFirstErrorMessage(formik, 'description')}
              readOnly={false}
              sizesType="XL"
              onChange={(event) =>
                formik.setFieldValue(
                  `translations[${0}].description`,
                  event.target.value
                )
              }
              setValue={(value) =>
                formik.setFieldValue(`translations[${0}].description`, value)
              }
              maxRows={1000}
              scrollbar={false}
              placeholder="Add a brief description"
              onBlur={formik.handleBlur}
              value={
                cleanHtml(formik.values?.translations[0]?.description) ?? ''
              }
              hasError={hasFieldError(formik, 'description')}
              fieldName="description"
            >
              <Text textStyle="XL" noOfLines={[1000, 1000]}>
                {cleanHtml(formik.values?.translations[0]?.description) ||
                  'Add a brief description'}
              </Text>
            </TextEditable>
          </Box>
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <Heading size="sm">Content</Heading>
            <Box
              display={'flex'}
              justifyContent="center"
              alignItems={'center'}
              gap="20px"
            >
              <Text textStyle={'sm'}>multi-language</Text>
              <Switch sizes="md" checked={checked} onClick={handleToggle} />
            </Box>
          </Flex>
          <Flex
            marginTop="25px"
            marginBottom={
              cardElementSelected?.type.title === 'Video' ||
              cardElementSelected?.type.title === 'Audio'
                ? '50px'
                : '20px'
            }
            w="100%"
          >
            <FileDropper
              errorMessage={errorMessage}
              hasError={hasError}
              isDisabled={false}
              onChangeProgress={setIsFileUploaded}
              progressChange={isFileUploaded}
              type={cardElementSelected?.type.title.toLowerCase()}
              warning={false}
              onDrop={(files: any) => {
                console.log({ files });
              }}
              maxFiles={1}
              maxSize={10 * 1000 * 1000}
              onChange={uploadFile}
              setFileAttributes={handleFileAttributes}
              uploadedFileDuration={null}
              uploadedFileName={
                cardElementSelected?.translations[0]?.asset?.filePath || null
              }
              uploadedFileSize={
                cardElementSelected?.translations[0]?.asset?.size
              }
            />
          </Flex>
          {cardElementSelected?.type.title === 'Video' ||
          cardElementSelected?.type.title === 'Audio' ? (
            <></>
          ) : (
            <>
              <Text color="txSecondary">Estimated time to complete</Text>
              <Box
                display="flex"
                alignContent={'center'}
                gap="20px"
                marginBottom="40px"
                justifyContent="space-between"
                marginTop="10px"
              >
                <SelectorSystem
                  selectorData={SELECTORS}
                  type={'sm'}
                  selectionType={'single'}
                />

                <Box width="80px">
                  <InputText
                    hasError={false}
                    placeholder="Text"
                    sizes="md"
                    value={customInput}
                    onChange={(e) => handleCustomInput(e.target.value)}
                  />
                </Box>
              </Box>
            </>
          )}
        </Box>
      )}
    </form>
  );
};

export default DrawerDocument;
