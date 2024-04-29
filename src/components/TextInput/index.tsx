import type {InputProps} from '@rneui/themed';
import {Input} from '@rneui/themed';
import {FC, Ref} from 'react';
import {ReturnKeyTypeOptions, StyleProp, ViewStyle} from 'react-native';
import createStyles from './styles';
import {useBoolean, useEvent, useThemedStyles} from '../../hooks';
import theme from '../../theme/base';

interface TextInputProps extends InputProps {
  name?: string;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  innerRef?: Ref<any>;
  accessibilityLabel?: string;
}

const TextInput: FC<TextInputProps> = ({
  name,
  placeholder = 'placeholder',
  containerStyle,
  onChange,
  onFocus,
  onBlur,
  innerRef,
  accessibilityLabel,
  disabled,
  errorMessage,
  ...props
}) => {
  const [isFocused, setIsFocused] = useBoolean(false);
  const [styles] = useThemedStyles(createStyles);
  const handleFocus = useEvent(() => {
    setIsFocused.on();
    onFocus?.();
  });
  const handleBlur = useEvent(() => {
    setIsFocused.off();
    onBlur?.();
  });
  const inputContainerStyle = [
    containerStyle,
    errorMessage ? styles.errorInput : undefined,
    isFocused ? styles.focusedInput : undefined,
    disabled ? styles.disabled : undefined,
  ];
  return (
    <Input
      id={name}
      accessibilityLabel={accessibilityLabel}
      autoCapitalize="none"
      placeholderTextColor={theme.colors.neutral100}
      onChangeText={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      labelProps={{numberOfLines: 1}}
      placeholder={placeholder}
      labelStyle={styles.label}
      inputContainerStyle={inputContainerStyle}
      ref={innerRef}
      disabled={disabled}
      errorStyle={styles.error}
      errorMessage={errorMessage}
      {...props}
    />
  );
};

export default TextInput;
