//TODO: Move to utils top folder if it is used in more than one

export const getFirstErrorMessage = (formik: any, fieldName: string) => {
  const error = formik.errors[fieldName];

  if (error && Array.isArray(error)) {
    return error[0];
  }

  return error;
};

export const hasFieldError = (formik: any, fieldName: string) => {
  const fieldTouched = formik.touched[fieldName];
  const fieldError = formik.errors[fieldName];

  return Boolean(fieldTouched && fieldError);
};
