import type {FieldProps, FormikHelpers, FormikValues} from 'formik';
import {FC, ReactElement} from 'react';
import {KeyboardType, ReturnKeyTypeOptions} from 'react-native';
import ComponentsRegistry from '@/forms/DynamicForm/ComponentsRegistry';

export type Validation = {
  type: string;
  value?: string | number;
  message?: string;
};

export interface Option {
  value: string | number;
  label?: string;
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

export interface FormButtonsProps {
  formSchema?: {
    cancelText?: string;
    submitText?: string;
    submitButton?: SubmitButton;
    hideSubmit?: boolean;
  };
  isSubmitting: boolean;
  isLoading?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
}

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

export type DynamicFormProps = {
  formSchema: DynamicFormSchema;
  initialValues?: Record<string, any>;
  components?: Array<[string, FC]>;
  onCancel?: () => void;
  onChange?: (key: any, value: any, values: any) => void;
  onAction?: (actionName: string) => void;
  onSubmitValidationError?: () => void;
  onSubmit?: (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => void;
  innerRef?: any;
  isLoading?: boolean;
};

export type InnerFormProps = {
  isSubmitting: boolean;
  formSchema: DynamicFormSchema;
  componentsRegistry: ComponentsRegistry;
  isValid: boolean;
  isLoading?: boolean;
  validateForm: () => void;
  onAction?: (actionName: string) => void;
  onChange: (key: any, value: any) => void;
  onCancel?: () => void;
  onSubmitValidationError?: () => void;
  values: FormikValues;
  setFieldValue: (field: string, value: any) => void;
  setFieldTouched: (field: string, isTouched?: boolean) => void;
  submitForm?: () => void;
};

export interface SubmitButton {
  disabled: boolean;
}

export interface Enabled {
  value: string | number;
  field: string;
}

export interface DynamicFormSchema {
  id?: string;
  submitText?: string;
  submittingText?: string;
  submitButton?: SubmitButton;
  fields: DynamicFormConfig[];
  position?: string;
}

export interface ErrorFeedbackProps {
  config: {label?: string};
}
