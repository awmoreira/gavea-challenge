import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Input from '~/components/TextInput';
import {PrimaryButton} from '~/components/Button';
import {Email, Padlock, User} from '~/assets/svgs';

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

import Routes from '~/navigation/routes';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate(Routes.SIGN_IN);
  };

  return (
    <Container>
      <WrapperTop />
      <WrapperCenter>
        <Title>Criar Conta</Title>
        <WrapperInputs>
          <Input placeholder="Nome completo" icon={<User color="#748C94" />} />
          <Input placeholder="Email" icon={<Email color="#748C94" />} />

          <Input
            placeholder="Senha"
            icon={<Padlock color="#748C94" />}
            secureTextEntry
          />
          <Input
            placeholder="Confirmar Senha"
            icon={<Padlock color="#748C94" />}
            secureTextEntry
          />
        </WrapperInputs>
        <PrimaryButton>Cadastrar</PrimaryButton>
      </WrapperCenter>
      <WrapperBottom>
        <Description>Já tem uma conta? </Description>
        <ButtonOrange onPress={goToSignIn}>
          <DescriptionOrange>Faça o login</DescriptionOrange>
        </ButtonOrange>
      </WrapperBottom>
    </Container>
  );
};

export default SignUp;
