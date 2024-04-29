import {Theme} from '@/types';

export const button = (theme: Theme) => ({
  containerStyle: {
    borderRadius: 60,
    maxWidth: '100%',
  },
  buttonStyle: {
    minWidth: 120,
    paddingVertical: theme.spacing.paddingVertical * 1.5,
    backgroundColor: theme.colors.brandPrimary,
  },
  titleStyle: {
    fontSize: theme.typography.regular.fontSize,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  disabledStyle: {
    backgroundColor: theme.colors.neutral200,
  },
  disabledTitleStyle: {
    color: theme.colors.white,
  },
});

export const chipButton = (theme: Theme) => ({
  containerStyle: {
    marginHorizontal: theme.spacing.marginHorizontal,
    marginBottom: theme.spacing.marginVertical,
    borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: theme.colors.brandPrimary,
    paddingVertical: theme.spacing.paddingVertical,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: theme.colors.brandPrimary,
    marginHorizontal: theme.spacing.marginHorizontal,
    paddingVertical: theme.spacing.paddingVertical,
    borderRadius: 10,
  },
  titleStyle: {
    color: theme.colors.brandPrimary,
  },
  activeTitle: {color: theme.colors.white},
});

export const clearButton = (theme: Theme) => ({
  containerStyle: {
    marginHorizontal: theme.spacing.marginHorizontal,
  },
  buttonStyle: {
    paddingVertical: theme.spacing.paddingVertical * 1.5,
  },
  titleStyle: {
    fontSize: theme.typography.regular.fontSize,
    color: theme.colors.brandPrimary,
  },
});

export const outlineButton = (theme: Theme) => ({
  containerStyle: {
    minWidth: 120,
    marginHorizontal: theme.spacing.marginHorizontal,
    paddingVertical: 0,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: theme.colors.brandPrimary,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    fontSize: theme.typography.regular.fontSize,
    fontWeight: '700',
    color: theme.colors.brandPrimary,
  },
});
