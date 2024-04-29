import {FC, Fragment} from 'react';
import {createErrorFeedbackStyles} from './styles';
import {ErrorFeedbackProps} from '../types.ts';
import {useThemedStyles} from '../../hooks';
import {Text} from '../../components';

const ErrorFeedback: FC<ErrorFeedbackProps> = ({config}) => {
  const [styles] = useThemedStyles(createErrorFeedbackStyles);
  return config.label ? (
    <Text accessibilityLabel={`lbl-error-${config.label}`} style={styles.text}>
      {config.label}
    </Text>
  ) : (
    <Fragment />
  );
};

export default ErrorFeedback;
