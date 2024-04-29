import theme from '../../theme/base';

export const createStyles = () => ({
  container: {
    width: '100%',
    marginBottom: theme.spacing.marginVertical * 1.5,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: theme.colors.black,
    fontSize: theme.typography.regular.fontSize,
    paddingBottom: theme.spacing.paddingVertical / 2,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  buttonGroupContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    minWidth: 250,
    height: 50,
    borderColor: theme.colors.black,
  },
  selectedButton: {
    backgroundColor: theme.colors.brandPrimary,
  },
  selectedText: {
    color: theme.colors.white,
  },
  text: {
    color: 'black',
  },
  disabled: {
    opacity: 0.7,
    backgroundColor: theme.colors.disabled,
  },
  captionContainer: {
    flexDirection: 'row',
    width: '50%',
  },
  caption: {
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'center',
  },
});
