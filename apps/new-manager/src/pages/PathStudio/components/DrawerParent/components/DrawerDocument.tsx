import { useRef, useState } from 'react';

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
  const [customInput, setCustomInput] = useState('Custom');
  const fileRef = useRef<any>();
  const [fileState, setFileState] = useState<uploadFile | null>(null);

  const { updateElement } = useSectionsStore();

  const { onClose, handleTranslate, showTranslate } = props;

  const { cardElementSelected, IdSectionSelected } = useSectionsStore(
    (state) => ({
      cardElementSelected: state.cardElementSelected,
      sectionContents: state.sectionContents,
      IdSectionSelected: state.IdSectionSelected,
    }),
    shallow
  );

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
    onSubmit: (values) => {},
  });

  const handleToggle = () => {
    setChecked(!checked);
  };

  const handleFileAttributes = (fileData: uploadFile) => {
    if (!isEqual(fileState, fileData)) {
      fileRef.current = fileData;
      setFileState(fileData);
    }
  };

  const handleSaveDataCard = () => {
    if (!cardElementSelected || !formik.values.translations) return;

    // 1. Crea el primer elemento modificado.
    const updatedFirstTranslation = {
      title: formik.values.translations[0].title,
      description: formik.values.translations[0].description,
      asset: {
        ...cardElementSelected?.translations[0].asset,
        size: fileState?.size,
        filePath: fileState?.name,
      },
    };

    // 2. Combina el elemento modificado con el resto de formik.values.translations.
    const updatedTranslations = [
      updatedFirstTranslation,
      ...formik.values.translations.slice(1),
    ];

    // 3. Pasa el array modificado a la función updateElement.
    updateElement(IdSectionSelected, cardElementSelected.uid, {
      translations: updatedTranslations,
      newCard: false,
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
                        toolBars={false}
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
                            type={cardElementSelected?.type.title.toLowerCase()}
                            isDisabled={false}
                            errorMessage={errorMessage}
                            hasError={hasError}
                            warning={false}
                            maxFiles={1}
                            maxSize={10 * 1000 * 1000}
                            onChange={() => {}}
                            onDrop={(files: any) => {
                              console.log({ files });
                            }}
                            uploadedFileDuration={null}
                            uploadedFileName={
                              cardElementSelected?.translations[0]?.asset
                                ?.filePath
                                ? cardElementSelected?.translations[0]?.asset
                                    ?.filePath
                                : null
                            }
                            uploadedFileSize={
                              cardElementSelected?.translations[0]?.asset?.size
                                ? cardElementSelected?.translations[0]?.asset
                                    ?.size
                                : null
                            }
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

          {cardElementSelected.type.title === 'url' ? (
            <Box w="100%" mt="40px"></Box>
          ) : (
            <div>
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
                  onChange={() => {}}
                  setFileAttributes={handleFileAttributes}
                  uploadedFileDuration={null}
                  uploadedFileName={
                    cardElementSelected?.translations[0]?.asset?.filePath
                      ? cardElementSelected?.translations[0]?.asset?.filePath
                      : null
                  }
                  uploadedFileSize={
                    cardElementSelected?.translations[0]?.asset?.size
                      ? cardElementSelected?.translations[0]?.asset?.size
                      : null
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
            </div>
          )}
        </Box>
      )}
    </form>
  );
};

export default DrawerDocument;
