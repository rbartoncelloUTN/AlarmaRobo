import {Formik, FormikHelpers, FormikValues} from 'formik';
import {FC, useMemo, useState} from 'react';
import ComponentsRegistry from './ComponentsRegistry';
import InnerForm from './InnerForm';
import {DynamicFormProps} from '@/forms/types';
import {formatValues} from '@/forms/utils';
import {buildFormSchema} from '@/forms/validations';
import {useEvent} from '@/hooks';

export const DynamicForm: FC<DynamicFormProps> = ({
  formSchema,
  initialValues = {},
  components,
  onCancel,
  onChange = () => {},
  onAction,
  onSubmitValidationError,
  onSubmit,
  innerRef,
  isLoading,
}) => {
  const [values, setValues] = useState(initialValues);
  const componentsRegistry = useMemo(
    () => new ComponentsRegistry(components),
    [components],
  );
  const validationSchema = buildFormSchema(formSchema);
  const handleChange = useEvent((key: string, value: any) => {
    setValues({...values, [key]: value});
    onChange(key, value, values);
  });
  const handleSubmit = useEvent(
    (formikValues: FormikValues, actions: FormikHelpers<FormikValues>) => {
      // Returns void because if onSubmit returns a Promise, the isSubmitting
      // could be wrongly dismissed when the Promised is resolved.
      onSubmit?.(formatValues(formikValues, formSchema.fields), actions);
    },
  );
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      innerRef={innerRef}
      enableReinitialize>
      {props => (
        <InnerForm
          {...props}
          formSchema={formSchema}
          componentsRegistry={componentsRegistry}
          onCancel={onCancel}
          onAction={onAction}
          onChange={handleChange}
          onSubmitValidationError={onSubmitValidationError}
          isLoading={isLoading}
        />
      )}
    </Formik>
  );
};

export default DynamicForm;
