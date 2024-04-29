import {FieldInputProps, FormikProps} from 'formik';
import {useEvent} from '../../hooks';

const useChange = (
  form: FormikProps<any>,
  field: FieldInputProps<any>,
  onChange: ((name: string, value: any) => void) | undefined,
) =>
  useEvent((value: any) => {
    form.setFieldValue(field.name, value);
    onChange?.(field.name, value);
  });

export default useChange;
