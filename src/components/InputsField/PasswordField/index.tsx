import {FC} from 'react';
import {Pressable} from 'react-native';
import TextInput, {TextInputProps} from '../TextInput';
import {useBoolean} from '../../../hooks';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordField: FC<TextInputProps> = ({...props}) => {
  const [secureEntry, setSecureEntry] = useBoolean(true);

  return (
    <TextInput
      {...props}
      keyboardType={secureEntry ? undefined : 'visible-password'}
      secureTextEntry={secureEntry}
      rightIcon={
        <Pressable onPress={setSecureEntry.toggle}>
          {secureEntry ? (
            <Icon name="eye-off-outline" size={30} color="#900" />
          ) : (
            <Icon name="eye-outline" size={30} color="#900" />
          )}
        </Pressable>
      }
    />
  );
};

export default PasswordField;
