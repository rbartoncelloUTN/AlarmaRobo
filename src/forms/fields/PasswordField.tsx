import {FC} from 'react';
import {Pressable} from 'react-native';
import useChange from '../hooks/useChange';
import {DynamicFieldProps} from '../types.ts';
import {useBoolean} from '../../hooks';
import {TextInput} from '../../components';
import {getFieldError} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordField: FC<DynamicFieldProps> = ({
  field,
  form,
  config,
  onChange,
  ...props
}) => {
  const [secureEntry, setSecureEntry] = useBoolean(true);
  const handleChange = useChange(form, field, onChange);
  return (
    <TextInput
      {...field}
      {...props}
      keyboardType={secureEntry ? undefined : 'visible-password'}
      secureTextEntry={secureEntry}
      rightIcon={
        <Pressable onPress={setSecureEntry.toggle}>
          {secureEntry ? (
            <Icon name="eye-off" color="#000" />
          ) : (
            <Icon name="eye" color="#000" />
          )}
        </Pressable>
      }
      errorMessage={getFieldError(form, field)}
      onChange={handleChange}
      onBlur={() => form.handleBlur(field.name)}
      label={config.label}
      placeholder={config.placeholder}
    />
  );
};

export default PasswordField;
