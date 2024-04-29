import theme from '../../theme/base';

export const createStyles = () => ({
  container: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.paddingHorizontal,
    marginBottom: theme.spacing.marginVertical,
    overflowX: 'hidden',
  },
});

export default createStyles;
