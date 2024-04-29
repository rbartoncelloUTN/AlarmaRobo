import theme from '../../theme/base';

const createStyles = () => ({
  focusedInput: {
    borderColor: theme.colors.brandPrimary,
  },
  label: {
    fontSize: theme.typography.small.fontSize,
    color: theme.colors.brandDark,
    fontWeight: 'bold',
  },
  disabled: {
    opacity: 0.7,
    backgroundColor: theme.colors.disabled,
  },
  error: {
    fontWeight: 'bold',
    color: theme.colors.error,
    fontSize: theme.typography.large.fontSize,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
});

export default createStyles;
