import {FC} from 'react';
import useChange from '../hooks/useChange';
import getFieldError from '../utils/getFieldError';
import {createInputStyles} from './styles';
import {DynamicFieldProps} from '../types.ts';
import {useThemedStyles} from '../../hooks';
import {TextInput} from '../../components';

const TextField: FC<DynamicFieldProps> = ({
  field,
  form,
  config,
  onChange,
  nextInnerRef,
  keyboardType,
  value,
  ...props
}) => {
  const [styles] = useThemedStyles(createInputStyles);
  const handleChange = useChange(form, field, onChange);
  return (
    <TextInput
      {...field}
      {...props}
      keyboardType={keyboardType || config.keyboardType || 'default'}
      label={config.label}
      disabled={config.disabled as boolean}
      placeholder={config.placeholder}
      multiline={config.multiline}
      errorMessage={getFieldError(form, field)}
      onFocus={() => form.setFieldTouched(field.name)}
      onBlur={() => form.handleBlur(field.name)}
      labelStyle={styles.label}
      onChange={handleChange}
      onSubmitEditing={() => nextInnerRef?.current?.focus()}
      returnKeyType={config.returnKeyType}
      accessibilityLabel={config.accessibilityLabel}
      numberOfLines={config.numberOfLines}
      value={(field.value as string) || value}
    />
  );
};

export default TextField;
