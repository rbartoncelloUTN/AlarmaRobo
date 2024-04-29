import {FC} from 'react';
import TextField from './TextField';
import {DynamicFieldProps} from '../types.ts';

const NumberField: FC<DynamicFieldProps> = props => {
  props.field.value = props.field.value?.toString();

  return <TextField keyboardType="numeric" {...props} />;
};

export default NumberField;
