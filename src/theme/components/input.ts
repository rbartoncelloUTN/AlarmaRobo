import {Theme} from '@/types';

const input = (theme: Theme) => ({
  containerStyle: {
    borderBottomWidth: 0,
    width: '100%',
  },
  inputContainerStyle: {
    marginHorizontal: -theme.spacing.marginHorizontal,
    paddingHorizontal: theme.spacing.paddingHorizontal,
    borderWidth: 1,
    borderColor: theme.colors.brandDark,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
  },
  labelStyle: {
    paddingBottom: 5,
    color: theme.colors.brandDark,
  },
  errorStyle: {
    color: theme.colors.brandDark,
  },
});

export default input;
