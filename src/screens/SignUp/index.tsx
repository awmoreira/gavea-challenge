import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

import Input from '~/components/TextInput';
import {PrimaryButton} from '~/components/Button';
import {Email, Padlock, User} from '~/assets/svgs';
import {useAuth} from '~/contexts/Auth';
import DismissKeyboard from '~/components/DismissKeyboard';

import {
  Container,
  WrapperTop,
  WrapperCenter,
  WrapperBottom,
  Title,
  Description,
  ButtonOrange,
  DescriptionOrange,
  WrapperInputs,
} from './styles';

import validationSchema from './validationSchema';
import Routes from '~/navigation/routes';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const {loading, signUp} = useAuth();
  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {fullname: '', email: '', password: '', confirmation: ''},
    onSubmit: values => {
      signUp(
        values.fullname,
        values.email,
        values.password,
        values.confirmation,
      );
    },
    validationSchema,
  });

  const goToSignIn = () => {
    navigation.navigate(Routes.SIGN_IN);
  };

  return (
    <DismissKeyboard>
      <Container>
        <WrapperTop />
        <WrapperCenter>
          <Title>Criar Conta</Title>
          <WrapperInputs>
            <Input
              autoFocus
              onChangeText={handleChange('fullname')}
              value={values.fullname}
              autoCapitalize="none"
              autoCorrect={false}
              touched={touched.fullname}
              error={errors.fullname}
              returnKeyType="next"
              placeholder="Nome completo"
              icon={<User color="#748C94" />}
            />
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
              returnKeyType="next"
              placeholder="Senha"
              icon={<Padlock color="#748C94" />}
              secureTextEntry
            />
            <Input
              onChangeText={handleChange('confirmation')}
              value={values.confirmation}
              autoCapitalize="none"
              autoCorrect={false}
              touched={touched.confirmation}
              error={errors.confirmation}
              returnKeyType="go"
              placeholder="Confirmar Senha"
              icon={<Padlock color="#748C94" />}
              secureTextEntry
              onSubmitEditing={() => handleSubmit()}
            />
          </WrapperInputs>
          <PrimaryButton onPress={() => handleSubmit()} loading={loading}>
            Cadastrar
          </PrimaryButton>
        </WrapperCenter>
        <WrapperBottom>
          <Description>Já tem uma conta? </Description>
          <ButtonOrange onPress={() => goToSignIn()}>
            <DescriptionOrange>Faça o login</DescriptionOrange>
          </ButtonOrange>
        </WrapperBottom>
      </Container>
    </DismissKeyboard>
  );
};

export default SignUp;
