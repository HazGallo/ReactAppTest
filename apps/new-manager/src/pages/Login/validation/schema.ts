import * as Yup from 'yup';
// Validation schema
export const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const contentSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  projectUid: Yup.string().required(),
  defaultLanguageUid: Yup.string().required(),
  topicUid: Yup.string().required(),
});

// Validación de la interfaz FileDropperParams
export const fileDropperSchema = Yup.object().shape({
  path: Yup.string().required(),
  content: contentSchema.required(),
});
