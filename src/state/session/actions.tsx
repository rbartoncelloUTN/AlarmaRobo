import {useSessionStore} from './slice.ts';
import {FIREBASE_AUTH} from '../../services/firebase/FirebaseConfig.ts';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {
  getErrorStatus,
  getStartStatus,
  getSuccessStatus,
} from '../helper/statusStateFactory.ts';
import firebase from 'firebase/compat';
import UserCredential = firebase.auth.UserCredential;
import useNavigator from '../../hooks/useNavigation.ts';
import Routes from '../../navigation/routes.ts';
import {users} from '../../constans/users.ts';

export const useLogin = () => {
  const {setStatus, setToken, setUser} = useSessionStore.getState();
  const {navigate} = useNavigator();

  const login = async (email: string, password: string) => {
    setStatus(getStartStatus());
    try {
      const response: UserCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password,
      );
      setStatus(getSuccessStatus());
      setToken(response.user?.accessToken);
      const user = users.find(u => u.email === response.user?.email);
      setUser(user);
      navigate(Routes.HOME);
    } catch (error) {
      setStatus(getErrorStatus());
    }
  };

  const logout = async () => {
    setStatus(getStartStatus());
    try {
      await signOut(FIREBASE_AUTH);
      setStatus(getSuccessStatus());
      setToken('');
      setUser(undefined);
      navigate(Routes.LOGIN);
    } catch (error) {
      setStatus(getErrorStatus());
    }
  };

  return {login, logout};
};
