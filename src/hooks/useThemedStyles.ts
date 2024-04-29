import {useTheme} from '@rneui/themed';
import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

const useThemedStyles = (createStyle: any) => {
  const {theme} = useTheme();
  return [
    useMemo(() => StyleSheet.create(createStyle(theme)), [theme, createStyle]),
    theme,
  ];
};

export default useThemedStyles;
