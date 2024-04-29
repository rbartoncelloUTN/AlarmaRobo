import type {FormikHelpers} from 'formik';
import {Field, Formik} from 'formik';
import {useRef} from 'react';
import {Pressable, View} from 'react-native';
import {createStyles} from './styles';
import type {FormValues} from './types';
import validationSchema from './validationSchema';
import {Button, Container, LoadingOverlay, Title} from '../../components';
import {useBoolean, useThemedStyles} from '../../hooks';
import {ErrorFeedback, PasswordField, TextField} from '../../forms/fields';
import {FIREBASE_AUTH} from '../../services/firebase/FirebaseConfig.ts';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import useNavigator from '../../hooks/useNavigation.ts';
import {admin, user_2, user_3} from '../../constans/users.ts';
import ArrowLeft from '../../assets/icons/ArrowLeft.tsx';

const initialValues: FormValues = {email: '', password: ''};

const RegisterScreen = () => {
  const [styles] = useThemedStyles(createStyles);
  const [isLoading, setIsLoading] = useBoolean(false);
  const [isError, setIsError] = useBoolean(false);

  const auth = FIREBASE_AUTH;
  const {navigate, goBack} = useNavigator();

  const signUp = async (email: string, password: string) => {
    setIsLoading.on();
    setIsError.off();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log({response});
      navigate('HomeScreen');
    } catch (e) {
      console.log({e});
      setIsError.on();
    } finally {
      setIsLoading.off();
    }
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log({values});
    signUp(values.email, values.password);
    actions.resetForm({values});
    actions.setStatus({isSubmitted: true});
  };
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Container accessibilityLabel="view-login-container">
      {isLoading && <LoadingOverlay />}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Pressable onPress={goBack}>
          <ArrowLeft width={30} height={30} />
        </Pressable>
        <View>
          <Title style={styles.title}>Registrar nuevo usuario</Title>
        </View>
      </View>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}>
        {({submitForm, setValues, values, dirty, status: state}) => (
          <View style={styles.content}>
            <View style={styles.content}>
              <Field
                accessibilityLabel="txt-login-username"
                component={TextField}
                name="username"
                config={{
                  placeholder: 'Email',
                  label: 'Ingrese un email',
                  returnKeyType: 'next',
                  keyboardType: 'email-address',
                }}
                innerRef={usernameRef}
                nextInnerRef={passwordRef}
                value={values.email}
              />

              <Field
                accessibilityLabel="txt-login-password"
                component={PasswordField}
                name="password"
                config={{
                  placeholder: 'Contraseña',
                  label: 'Ingrese una contraseña',
                }}
                innerRef={passwordRef}
                value={values.password}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View style={styles.button}>
                <Button
                  onPress={() => setValues(admin)}
                  title="Usuario admin"
                  accessibilityLabel="btn-login-submit"
                />
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => setValues(user_2)}
                  title="Usuario 2"
                  accessibilityLabel="btn-login-submit"
                />
              </View>
              <View style={styles.button}>
                <Button
                  onPress={() => setValues(user_3)}
                  title="Usuario 3"
                  accessibilityLabel="btn-login-submit"
                />
              </View>
            </View>
            {!dirty && state?.isSubmitted && isError && (
              <ErrorFeedback config={{label: 'El email ya fue registrado'}} />
            )}
            <View style={styles.button}>
              <Button
                onPress={submitForm}
                title="Registar"
                accessibilityLabel="btn-login-submit"
              />
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterScreen;
