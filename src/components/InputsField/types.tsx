import {ReactElement} from 'react';
import {KeyboardType, ReturnKeyTypeOptions} from 'react-native';
import type {FieldProps} from 'formik';

export interface DynamicFieldProps<V = any> extends FieldProps<V> {
  config: DynamicFormConfig;
  type?: string;
  onChange: (name: string, value: V) => void;
  iconRight?: ReactElement;
  onAction?: (arg: any) => void;
  keyboardType?: KeyboardType;
  innerRef?: any;
  nextInnerRef?: any;
}

export interface DynamicFormConfig {
  type?: string;
  name?: string | string[];
  accessibilityLabel?: string;
  label?: string;
  caption?: string;
  captions?: string[];
  disabled?: boolean | number[];
  placeholder?: string;
  validationType?: string;
  multiline?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  validations?: Validation[];
  onAction?: object;
  url?: string;
  options?: Option[];
  size?: string;
  enabled?: Enabled[];
  onChangeValues?: {
    name: string;
    value: string | number;
  }[];
  minimumDate?: number;
  maximumDate?: number;
  valueKey?: string;
  labelKey?: string;
  id?: string;
  numberOfLines?: number;
  value?: string | number;
}

export type Validation = {
  type: string;
  value?: string | number;
  message?: string;
};

export interface Option {
  value: string | number;
  label?: string;
}

export interface Enabled {
  value: string | number;
  field: string;
}
