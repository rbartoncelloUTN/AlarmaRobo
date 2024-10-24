import theme from '../../theme/base';

export const createStyles = () => ({
  container: {
    justifyContent: 'space-between',
    paddingTop: theme.spacing.marginVertical,
    backgroundColor: theme.colors.error,
  },
  modal: {
    borderWidth: 3,
    borderColor: theme.colors.error,
    backgroundColor: theme.colors.error,
    //flexDirection: 'colum',
  },
  confirm: {
    backgroundColor: theme.colors.brandGreen,
  },
  containerConfirm: {
    marginLeft: -theme.spacing.marginHorizontal,
    marginRight: theme.spacing.marginHorizontal / 2,
  },
  cancel: {
    backgroundColor: theme.colors.error,
  },
  containerCancel: {
    marginLeft: theme.spacing.marginHorizontal / 2,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: theme.spacing.paddingVertical,
  },
});
