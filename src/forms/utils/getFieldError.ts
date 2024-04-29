import type {FormikProps, FormikValues} from 'formik';

type GetFieldError = (
  arg0: FormikProps<FormikValues>,
  arg1: {name: string},
) => string | undefined;

/**
 * Returns the error to show on the HTML form
 */
const getFieldError: GetFieldError = (
  {submitCount, touched, errors},
  {name},
) => (submitCount || !!touched[name] ? (errors[name] as string) : undefined);

export default getFieldError;
