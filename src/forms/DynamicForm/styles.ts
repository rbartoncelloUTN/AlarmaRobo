import {Theme} from '@/types';

export const createButtonsStyles = (theme: Theme) => ({
  submit: {
    width: '100%',
    marginBottom: theme.spacing.marginVertical * 2.5,
  },
});

export const createFormStyles = () => ({
  form: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
