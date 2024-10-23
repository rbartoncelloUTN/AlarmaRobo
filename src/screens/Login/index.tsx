import type {FormikErrors, FormikHelpers} from 'formik';
import {Field, Formik} from 'formik';
import {FC, useState} from 'react';
import {useRef} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createStyles} from './styles';
import type {FormValues, LoginProps} from './types';
import validationSchema from './validationSchema';
import {Button, Container, LoadingOverlay, Text, Title} from '../../components';
import {useThemedStyles} from '../../hooks';
import {ErrorFeedback, PasswordField, TextField} from '../../forms/fields';
import {useSessionStore} from '../../state/session/slice.ts';
import {useLogin} from '../../state/session/actions.tsx';
import {users} from '../../constans/users.ts';
import BooleanButtons from '../../components/BooleanButtons';
import {SquareUnlockIcon} from '../../assets/icons';
import colors from '../../theme/base/colors.ts';

const initialValues: FormValues = {username: '', password: ''};

const Login: FC<LoginProps> = () => {
  const [styles] = useThemedStyles(createStyles);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const {status} = useSessionStore();
  const {login} = useLogin();
  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    await login(values.username, values.password);
    actions.resetForm({values});
    actions.setStatus({isSubmitted: true});
  };

  const handleAutoComplete = async (
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<FormValues>>,
    id: number,
  ) => {
    const user = users[id];
    await setFieldValue('username', user.email, false);
    await setFieldValue('password', `${user.password}`, false);
    setUserId(id);
  };

  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Container styles={{backgroundColor: colors.brandSecondary}}>
      {status.isFetching && <LoadingOverlay />}
      <Title style={styles.title}>Inicio de sessión</Title>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}>
        {({submitForm, dirty, status: state, setFieldValue}) => (
          <View style={styles.content}>
            <View style={styles.content}>
              <Field
                accessibilityLabel="txt-login-username"
                component={TextField}
                name="username"
                config={{
                  placeholder: 'Ingrese su correo electrónico',
                  label: 'Correo electrónico',
                  returnKeyType: 'next',
                  keyboardType: 'email-address',
                }}
                innerRef={usernameRef}
                nextInnerRef={passwordRef}
              />
              <Field
                accessibilityLabel="txt-login-password"
                component={PasswordField}
                name="password"
                config={{
                  placeholder: 'Ingrese contraseña',
                  label: 'Contraseña',
                }}
                innerRef={passwordRef}
              />
            </View>
            {!dirty && state?.isSubmitted && status.errorMessage && (
              <ErrorFeedback config={{label: status.errorMessage}} />
            )}

            <View style={styles.buttonContainer}>
              <BooleanButtons
                options={users.map(user => (
                  <Text key={user.id} style={{fontWeight: 'bold'}}>
                    {user.rol}
                  </Text>
                ))}
                label="Usuarios"
                onChange={(value: number) =>
                  handleAutoComplete(setFieldValue, value)
                }
                value={userId}
              />
              <TouchableOpacity
                onPress={submitForm}
                style={{
                  borderWidth: 1,
                  padding: 10,
                  width: 220,
                  borderRadius: 20,
                  backgroundColor: colors.brandPrimary,
                  alignSelf: 'center',
                }}>
                <SquareUnlockIcon width={200} height={200} color={'#fff'} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
