import {Route} from '@react-navigation/routers';
import {Header as HeaderRNE} from '@rneui/themed';
import {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Text from '../Text';
import headerLogo from '../../assets/images/logo.png';
import {useBoolean} from '../../hooks';
import {LogoutIcon} from '../../assets/icons';
import ModalConfirm from '../ModalConfirm';
import colors from '../../theme/base/colors.ts';
import {useSessionStore} from '../../state/session/slice.ts';
import {useLogin} from '../../state/session/actions.tsx';

const linearGradientProps = {
  colors: ['#E1E0E0FF', '#FFF'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
};

type HeaderProp = {
  onLogout?: () => void;
  token?: string;
  route: Route<string>;
};

const Header: FC<HeaderProp> = () => {
  const [active, setActive] = useBoolean(false);
  const {logout} = useLogin();

  const handleOnLogout = async () => {
    setActive.off();
    console.log('log out');
    await logout();
  };

  const token = useSessionStore(state => state.token);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <HeaderRNE
          containerStyle={styles.content}
          ViewComponent={LinearGradient}
          linearGradientProps={linearGradientProps}
          leftContainerStyle={styles.leftContainerStyle}
          rightContainerStyle={styles.rightContainerStyle}
          leftComponent={
            <Pressable onPress={() => {}}>
              <Image source={headerLogo} style={styles.logo} />
            </Pressable>
          }
          centerComponent={
            <View style={styles.centerComponent}>
              <Text style={styles.title}>Alarma Robo</Text>
            </View>
          }
          rightComponent={
            token ? (
              <Pressable onPress={setActive.toggle}>
                <LogoutIcon color={colors.error} />
              </Pressable>
            ) : undefined
          }
        />
      </View>
      <ModalConfirm
        active={active}
        setActive={setActive}
        onConfirm={handleOnLogout}
        title="¿Está seguro que desea cerrar sesión?"
      />
    </View>
  );
};

export default Header;
