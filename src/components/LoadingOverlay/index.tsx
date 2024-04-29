import {Overlay} from '@rneui/themed';
import {ActivityIndicator} from 'react-native';
import theme from '../../theme/base';

const LoadingOverlay = () => {
  return (
    <Overlay isVisible>
      <ActivityIndicator
        animating
        size="large"
        color={theme.colors.brandPrimary}
      />
    </Overlay>
  );
};

export default LoadingOverlay;
