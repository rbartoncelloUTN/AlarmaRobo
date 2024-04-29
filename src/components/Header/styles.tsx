import {StyleSheet} from 'react-native';
import theme from '../../theme/base';

export default StyleSheet.create({
  wrapper: {},
  container: {
    borderBottomWidth: 1,
    borderColor: theme.colors.neutral200,
  },
  content: {},
  logo: {
    height: 40,
    width: 40,
  },
  linkItem: {
    paddingHorizontal: 10,
    color: theme.colors.brandPrimary,
  },
  leftContainerStyle: {
    maxWidth: 35,
    justifyContent: 'center',
  },
  rightContainerStyle: {
    maxWidth: 35,
    justifyContent: 'center',
  },
  centerComponent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: theme.colors.brandPrimary,
  },
});
