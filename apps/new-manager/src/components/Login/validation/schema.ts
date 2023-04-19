import * as Yup from 'yup';
// Validation schema
export const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
});