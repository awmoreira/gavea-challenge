import React from 'react';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';

import {useAuth} from '~/contexts/Auth';
import DismissKeyboard from '~/components/DismissKeyboard';
import Input from '~/components/TextInput';
import {PrimaryButton} from '~/components/Button';
import {Email, Padlock} from '~/assets/svgs';
import Routes from '~/navigation/routes';

import validationSchema from './validationSchema';

import {
  Container,
  WrapperCenter,
  WrapperBottom,
  Title,
  Subtitle,
  Description,
  ButtonOrange,
  DescriptionOrange,
  WrapperInputs,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const {loading, signIn} = useAuth();
  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: values => {
      signIn(values.email, values.password);
    },
    validationSchema,
  });

  const goToSignUp = () => {
    navigation.navigate(Routes.SIGN_UP);
  };

  return (
    <DismissKeyboard>
      <Container>
        <WrapperCenter>
          <Title>Olá!</Title>
          <Subtitle>Seja bem-vindo.</Subtitle>
          <WrapperInputs>
            <Input
              onChangeText={handleChange('email')}
              value={values.email}
              autoCapitalize="none"
              autoCorrect={false}
              touched={touched.email}
              error={errors.email}
              returnKeyType="next"
              placeholder="Email"
              icon={<Email color="#748C94" />}
            />

            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              autoCapitalize="none"
              autoCorrect={false}
              touched={touched.password}
              error={errors.password}
              returnKeyType="go"
              placeholder="Senha"
              icon={<Padlock color="#748C94" />}
              secureTextEntry
              onSubmitEditing={() => handleSubmit()}
            />
          </WrapperInputs>
          <PrimaryButton onPress={() => handleSubmit()} loading={loading}>
            Entrar
          </PrimaryButton>
        </WrapperCenter>
        <WrapperBottom>
          <Description>Não tem uma conta? </Description>
          <ButtonOrange onPress={() => goToSignUp()}>
            <DescriptionOrange>Criar conta</DescriptionOrange>
          </ButtonOrange>
        </WrapperBottom>
      </Container>
    </DismissKeyboard>
  );
};

export default SignIn;
