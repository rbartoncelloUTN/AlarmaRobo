import theme from '../../theme/base';
import colors from '../../theme/base/colors.ts';

export const createStyles = () => ({
  container: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.paddingHorizontal,
    marginBottom: theme.spacing.marginVertical,
    overflowX: 'hidden',
    backgroundColor: colors.brandAccent,
  },
});

export default createStyles;
