import type {ButtonProps as RNEButtonProps} from '@rneui/base';
import {Button as BaseButton} from '@rneui/base';
import {Button as SolidButton, withTheme} from '@rneui/themed';
import {FC} from 'react';

const ClearButton = withTheme(BaseButton, 'ClearButton');
const OutlineButton = withTheme(BaseButton, 'OutlineButton');

const getButtonComponent = (type: string | undefined) => {
  switch (type) {
    case 'clear':
      return ClearButton;
    case 'outline':
      return OutlineButton;
    default:
      return SolidButton;
  }
};

interface ButtonProps extends RNEButtonProps {
  title?: string;
  onPress?: () => void;
  accessibilityLabel?: string;
}

const Button: FC<ButtonProps> = ({
  accessibilityLabel,
  type,
  title,
  onPress,
  ...props
}) => {
  const Component = getButtonComponent(type);
  return (
    <Component
      accessibilityLabel={accessibilityLabel}
      title={title}
      onPress={onPress}
      {...props}
    />
  );
};

export default Button;
