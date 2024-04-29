import type {Colors} from '@rneui/base';
import {Text as BaseText} from '@rneui/base';
import {Text as ThemedText, useTheme, withTheme} from '@rneui/themed';
import {StyleProp, TextStyle} from 'react-native';
import {FCC, Theme} from '../../types';
import theme from '../../theme/base';

const BoldText = withTheme(BaseText, 'BoldText');

export type Sizes = 'sm' | 'md' | 'lg' | 'xl';

type RNTheme = {colors: Colors} & Theme;

const getFontSize = (size: Sizes | undefined) => {
  let fontSize;
  switch (size) {
    case 'sm':
      fontSize = theme.typography.small.fontSize;
      break;
    case 'lg':
      fontSize = theme.typography.large.fontSize;
      break;
    case 'xl':
      fontSize = theme.typography.extraLarge.fontSize;
      break;
    case 'md':
    default:
      fontSize = theme.typography.regular.fontSize;
  }
  return {fontSize};
};

type TextProps = {
  accessibilityLabel?: string;
  bold?: boolean;
  size?: Sizes;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};

const Text: FCC<TextProps> = ({
  accessibilityLabel,
  bold = false,
  size,
  style,
  ...props
}) => {
  const {theme} = useTheme() as unknown as {theme: RNTheme};
  return bold ? (
    <BoldText
      accessibilityLabel={accessibilityLabel}
      style={[getFontSize(size, theme), style]}
      {...props}
    />
  ) : (
    <ThemedText
      accessibilityLabel={accessibilityLabel}
      style={[getFontSize(size, theme), style]}
      {...props}
    />
  );
};

export default Text;
