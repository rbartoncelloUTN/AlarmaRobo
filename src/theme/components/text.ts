import theme from '../base';

export const text = () => ({
  h1Style: {
    fontSize: 40,
  },
  h2Style: {
    fontSize: 34,
  },
  h3Style: {
    fontSize: 28,
  },
  h4Style: {fontSize: 22},
  base: {
    color: theme.colors.black,
  },
  title: {
    marginTop: theme.spacing.marginVertical,
    marginBottom: theme.spacing.marginVertical,
    color: theme.colors.black,
    fontSize: theme.typography.extraLarge.fontSize,
  },
  primaryTitle: {
    color: theme.colors.white,
  },
  body: {
    marginTop: theme.spacing.marginVertical,
    marginBottom: theme.spacing.marginVertical,
    color: theme.colors.brandDark,
    fontSize: theme.typography.regular.fontSize,
  },
  danger: {
    color: 'red',
  },
  dropdown: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: theme.colors.brandDark,
  },
});

export const boldText = () => ({
  ...text(theme),
  style: {fontWeight: 800},
});
