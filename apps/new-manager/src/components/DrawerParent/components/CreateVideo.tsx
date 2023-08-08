import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { shallow } from 'zustand/shallow';
import { FileDropper, TextEditable } from '@iseazy/react-kit';

import { HeaderDrawer } from './HeaderDrawer';
import { useCreateVideo } from '../hooks/useCreateVideo';
import { useFileDropper } from '../hooks/useFileDropper';
import { useSettings } from '../../../store/settingsStore';

interface Props {
  onClose?: () => void;
}

const CreateVideo = (props: Props) => {
  const { onClose } = props;

  const { InfoCardDrawer, readonly, dataVideoCard } = useSettings(
    (state) => ({
      InfoCardDrawer: state.InfoCardDrawer,
      readonly: state.readonly,
      dataVideoCard: state.dataVideo,
    }),
    shallow
  );

  const { mutate, data, isSuccess } = useCreateVideo();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Campo obligatorio')
      .min(5, 'El campo debe tener al menos 5 caracteres')
      .max(30, 'El campo no puede tener más de 30 caracteres'),
    description: Yup.string()
      .required('Campo obligatorio')
      .matches(
        /^[A-Za-z\s]+$/,
        'El campo solo puede contener letras y espacios'
      )
      .min(3, 'El campo debe tener al menos 3 caracteres'),
  });

  const formik = useFormik({
    initialValues: {
      uid: InfoCardDrawer.uid || null,
      title: InfoCardDrawer.title || 'New Video',
      description: InfoCardDrawer.description || 'Add a brief description',
    },
    validationSchema,
    onSubmit: (values) => {
      // Call the mutation here with the form values
      if (!dataVideo?.path) {
        setHasError(true);
        setErrorMessage('El campo es requerido');
      } else {
        if (values.uid === null) {
          setHasError(false);
          setErrorMessage('');
          mutate({ path: dataVideo.path, content: values });
        }
      }
    },
  });

  const getFirstErrorMessage = (formik: any, fieldName: string) => {
    const error = formik.errors[fieldName];

    if (error && Array.isArray(error)) {
      return error[0];
    }

    return error;
  };

  const hasFieldError = (formik: any, fieldName: string) => {
    const fieldTouched = formik.touched[fieldName];
    const fieldError = formik.errors[fieldName];

    return Boolean(fieldTouched && fieldError);
  };

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFieldChange = (fieldName: string, value: string) => {
    formik.setFieldValue(fieldName, value);
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire('video created successfully', '', 'success');
    }
  }, [isSuccess]);

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
  }, [dataVideo]);

  const uploadFile = (file: any) => {
    setIsFileUploaded(true);
    mutateUploadVideo({ path: file });
  };

  const [isFileUploaded, setIsFileUploaded] = useState(true);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        borderBottomWidth="1px"
        display="flex"
        w="full"
        paddingX={15}
        paddingY={17}
        justifyContent="space-between"
      >
        <HeaderDrawer disabled={false} onClose={onClose} />
      </Box>

      <Box w="100%" marginTop="20px">
        <TextEditable
          errorMessage={getFirstErrorMessage(formik, 'title')}
          readOnly={readonly}
          sizesType="XL"
          onChange={(event) => handleFieldChange('title', event.target.value)}
          setValue={(value) => handleFieldChange('title', value)}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          hasError={hasFieldError(formik, 'title')}
          placeholder="New Video"
          maxRows={1000}
          scrollbar={false}
          fieldName="title"
        >
          <Heading size="XL" noOfLines={[1000, 1000]} lineHeight="unset">
            {formik.values.title || 'New Video'}
          </Heading>
        </TextEditable>
      </Box>

      <Box>
        <TextEditable
          errorMessage={getFirstErrorMessage(formik, 'description')}
          readOnly={readonly}
          sizesType="XL"
          onChange={(event) =>
            handleFieldChange('description', event.target.value)
          }
          setValue={(value) => handleFieldChange('description', value)}
          maxRows={1000}
          scrollbar={false}
          placeholder="Add a brief description"
          onBlur={formik.handleBlur}
          value={formik.values.description}
          hasError={hasFieldError(formik, 'description')}
          fieldName="description"
        >
          <Text textStyle="XL" noOfLines={[1000, 1000]}>
            {formik.values.description || 'Add a brief description'}
          </Text>
        </TextEditable>
      </Box>

      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Heading size="sm">Content</Heading>
      </Flex>

      <Flex marginTop="25px" marginBottom="50px" w="100%">
        <FileDropper
          onChangeProgress={setIsFileUploaded}
          progressChange={isFileUploaded}
          type="video"
          isDisabled={false}
          errorMessage={errorMessage}
          hasError={hasError}
          warning={false}
          onDrop={(files: any) => {
            console.log({ files });
          } }
          maxFiles={1}
          maxSize={10 * 1000 * 1000}
          onChange={uploadFile} setFileAttributes={function (fileData: { name: string; size: number; duration: { hours: number; minutes: number; seconds: number; }; }): void {
            throw new Error('Function not implemented.');
          } }        />
      </Flex>
    </form>
  );
};

export default CreateVideo;
