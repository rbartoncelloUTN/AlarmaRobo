import {Field} from 'formik';
import {createRef, FC, Fragment} from 'react';
import {View} from 'react-native';
import FormButtons from './FormButtons';
import OnSubmitValidationError from './OnSubmitValidationError';
import Submitting from './Submitting';
import {createFormStyles} from '@/forms/DynamicForm/styles';
import {InnerFormProps} from '@/forms/types';
import {useEvent, useThemedStyles} from '@/hooks';

const InnerForm: FC<InnerFormProps> = ({
  isSubmitting,
  formSchema,
  onSubmitValidationError,
  componentsRegistry,
  validateForm,
  submitForm,
  onCancel,
  onAction,
  onChange,
  isLoading,
}) => {
  const [styles] = useThemedStyles(createFormStyles);
  const handleChange = useEvent((key: string, value: any) => {
    onChange(key, value);
    setTimeout(validateForm, 100);
  });
  const refs = formSchema.fields.map(createRef);
  return (
    <Fragment>
      {isSubmitting && <Submitting text={formSchema.submittingText} />}
      {onSubmitValidationError && (
        <OnSubmitValidationError callback={onSubmitValidationError} />
      )}
      <View style={styles.form}>
        {formSchema.fields?.map((field, i) => {
          const name = Array.isArray(field.name) ? field.name[0] : field.name;
          return (
            <Field
              key={`${name}-${i}`}
              name={name}
              innerRef={refs[i]}
              nextInnerRef={refs[i + 1]}
              config={field}
              component={componentsRegistry.get(field.type!)}
              onAction={onAction}
              onChange={handleChange}
            />
          );
        })}
      </View>
      <FormButtons
        {...{
          isLoading,
          formSchema,
          isSubmitting,
          onCancel,
          onSubmit: submitForm,
          onAction,
        }}
      />
    </Fragment>
  );
};

export default InnerForm;
