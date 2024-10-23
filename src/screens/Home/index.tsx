import {FC, useEffect, useRef, useState} from 'react';
import type {HomeScreenProps} from './types';
import {Container, Text} from '../../components';
import {useBoolean} from '../../hooks';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import colors from '../../theme/base/colors.ts';
import Sound from 'react-native-sound';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

type Orientation = 'Left' | 'Right' | 'Vertical' | 'Horizontal' | 'Unknown';
import {map, filter} from 'rxjs/operators';
import Torch from 'react-native-torch';
import Modal from '../../components/Modal';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_AUTH} from '../../services/firebase/FirebaseConfig.ts';
import {
  getErrorStatus,
  getSuccessStatus,
} from '../../state/helper/statusStateFactory.ts';
import {users} from '../../constans/users.ts';
import Routes from '../../navigation/routes.ts';
import {useSessionStore} from '../../state/session/slice.ts';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;

const HomeScreen: FC<HomeScreenProps> = () => {
  const soundRef = useRef<Sound | null>(null);
  const [active, setActive] = useBoolean(false);
  const [orientation, setOrientation] = useState<Orientation>('Unknown');

  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);
  const [open, setOpen] = useBoolean(false);
  const {user} = useSessionStore();

  const toggleTorch = () => {
    setIsTorchOn(prevState => {
      Torch.switchState(!prevState);
      return !prevState;
    });
  };

  const handleVibrate = () => {
    // Vibrar durante 5 segundos (5000 milisegundos)
    Vibration.vibrate(5000);
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'We need access to your camera to use the flash.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
        } else {
          console.log('Camera permission denied');
          Alert.alert(
            'Permission Denied',
            'Camera permission is required to use the flash.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  useEffect(() => {
    // Establecer el intervalo de actualización del acelerómetro
    setUpdateIntervalForType(SensorTypes.accelerometer, 1000); // 1000 ms

    const subscription = accelerometer
      .pipe(
        // Filtrar valores inválidos
        filter(
          ({x, y, z}) => x !== undefined && y !== undefined && z !== undefined,
        ),
        // Mapear los valores del acelerómetro a una orientación
        map(({x, y, z}) => {
          if (Math.abs(x) > Math.abs(y) && Math.abs(x) > Math.abs(z)) {
            return x > 0 ? 'Left' : 'Right';
          } else if (Math.abs(y) > Math.abs(x) && Math.abs(y) > Math.abs(z)) {
            return 'Vertical';
          } else if (Math.abs(z) > Math.abs(x) && Math.abs(z) > Math.abs(y)) {
            return 'Horizontal';
          } else {
            return 'Unknown';
          }
        }),
      )
      .subscribe(orientation => {
        setOrientation(orientation);
      });

    // Limpiar la suscripción cuando el componente se desmonte
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (active) {
      switch (orientation) {
        case 'Horizontal':
          console.log(orientation);
          handleVibrate();
          loadAndPlaySound(require('../../assets/sounds/sound5.mp3'));
          break;
        case 'Left':
          loadAndPlaySound(require('../../assets/sounds/sound2.mp3'));
          break;
        case 'Right':
          loadAndPlaySound(require('../../assets/sounds/sound3.mp3'));
          break;
        case 'Vertical':
          Torch.switchState(true);
          loadAndPlaySound(require('../../assets/sounds/sound4.mp3'));
          setInterval(() => {
            Torch.switchState(false);
          }, 5000);
          break;
      }
    }
  }, [orientation]);

  const loadAndPlaySound = (audioPath: any) => {
    soundRef.current = new Sound(audioPath, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      soundRef.current?.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        // Libera el sonido una vez que se haya reproducido completamente
        soundRef.current?.release();
        soundRef.current = null;
      });
    });
  };

  const handleActionModal = async (password: string) => {
    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, user?.email!, password);
      setActive.off();
    } catch (error) {
      handleVibrate();
      Torch.switchState(true);
      loadAndPlaySound(require('../../assets/sounds/sound1.mp3'));
      setInterval(() => {
        Torch.switchState(false);
      }, 5000);
    }
    setOpen.off();
  };

  return (
    <Container style={{flex: 1, borderWidth: 1, backgroundColor: 'black'}}>
      <TouchableOpacity
        onPress={() => {
          if (!active) {
            loadAndPlaySound(require('../../assets/sounds/sound1.mp3'));
            setActive.on();
          } else {
            console.log('eee');
            setOpen.on();
          }
        }}
        style={{
          flex: 1,
          borderWidth: 2,
          margin: 5,
          marginVertical: 15,
          borderRadius: 50,
          backgroundColor: active ? colors.error : colors.brandPrimary,
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 95, padding: 5}}>
            {active ? 'Apagar' : 'Activar'}
          </Text>
        </View>
      </TouchableOpacity>
      {open ? (
        <Modal
          active={open}
          setActive={setActive}
          onConfirm={value => handleActionModal(value)}
        />
      ) : undefined}
    </Container>
  );
};

export default HomeScreen;
