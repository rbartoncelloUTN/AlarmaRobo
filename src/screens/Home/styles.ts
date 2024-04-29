import theme from '../../theme/base';

export const createStyles = () => ({
  content: {
    flex: 1,
    minHeight: 240,
  },
  button: {
    marginBottom: theme.spacing.marginVertical,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '100',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: theme.spacing.marginVertical * 2,
  },
});
