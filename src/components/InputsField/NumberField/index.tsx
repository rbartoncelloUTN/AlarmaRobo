import {FC} from 'react';
import TextField, {TextInputProps} from '../TextInput';

const NumberField: FC<TextInputProps> = ({...props}) => {
  props.value = props.value?.toString();

  return <TextField keyboardType="numeric" {...props} />;
};

export default NumberField;
