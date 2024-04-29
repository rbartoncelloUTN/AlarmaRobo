import {ScrollView} from 'react-native';
import {createStyles} from './styles';
import {useThemedStyles} from '../../hooks';

const Container = ({style, children, ...props}: any) => {
  const [styles] = useThemedStyles(createStyles);
  return (
    <ScrollView contentContainerStyle={[styles.container, style]} {...props}>
      {children}
    </ScrollView>
  );
};

export default Container;
