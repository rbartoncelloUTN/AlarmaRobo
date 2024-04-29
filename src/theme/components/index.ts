import {createTheme} from '@rneui/themed';
import {button, chipButton, clearButton, outlineButton} from './button';
import {boldText, text} from './text';
import input from '@/theme/components/input';
import {Theme} from '@/types';

const buildTheme = (theme: Theme) =>
  createTheme({
    ...theme,
    components: {
      BoldText: boldText(theme),
      // @ts-ignore
      Button: button(theme),
      ChipButton: chipButton(theme),
      ClearButton: clearButton(theme),
      Input: input(theme) as any,
      OutlineButton: outlineButton(theme),
      Text: text(theme),
    },
  });

export default buildTheme;
