import theme from '../../theme/base';

export const createStyles = () => ({
  body: {
    borderRadius: 10,
  },
  title: {
    color: theme.colors.black,
    fontWeight: 'bold',
  },
  message: {
    color: theme.colors.black,
    marginBottom: theme.spacing.marginVertical / 2,
    padding: theme.spacing.paddingVertical / 2,
  },
  caption: {
    color: theme.colors.black,
    fontWeight: 'bold',
    marginHorizontal: theme.spacing.marginHorizontal,
    paddingVertical: theme.spacing.paddingVertical / 2,
  },
  comment: {
    color: theme.colors.black,
    marginHorizontal: theme.spacing.marginHorizontal * 2,
    padding: theme.spacing.paddingVertical / 2,
  },
});
