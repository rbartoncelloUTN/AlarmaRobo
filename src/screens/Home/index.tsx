import type {FC} from 'react';
import {createStyles} from './styles';
import type {HomeScreenProps} from './types';
import {Container, Title} from '../../components';
import {useThemedStyles} from '../../hooks';
import {useSessionStore} from '../../state/session/slice.ts';
const HomeScreen: FC<HomeScreenProps> = () => {
  const [styles] = useThemedStyles(createStyles);
  const {user} = useSessionStore();
  return (
    <Container accessibilityLabel="view-login-container">
      <Title style={styles.title}>Bienvenido {user?.email}</Title>
    </Container>
  );
};

export default HomeScreen;
