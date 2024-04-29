import {
  CommonActions,
  TabActions,
  useNavigation,
} from '@react-navigation/native';
import {useMemo} from 'react';

const useNavigator = () => {
  const navigation = useNavigation();

  return useMemo(
    () => ({
      dispatch: navigation.dispatch,
      goBack: () => navigation.dispatch(CommonActions.goBack()),
      navigate: (name: string, params?: {} | undefined) =>
        navigation.dispatch(
          CommonActions.navigate({
            name,
            params,
          }),
        ),
      jumpTo: (name: string, params: {} | undefined) =>
        navigation.dispatch(TabActions.jumpTo(name, params)),
      reset: (name: string) =>
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: name}],
          }),
        ),
    }),
    [navigation],
  );
};

export default useNavigator;
