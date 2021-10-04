import React from 'react';

import Input from '~/components/TextInput';
import {PrimaryButton} from '~/components/Button';
import {Email, Padlock} from '~/assets/svgs';

import {
  Container,
  WrapperTop,
  WrapperCenter,
  WrapperBottom,
  Title,
  Subtitle,
  Description,
  DescriptionOrange,
  WrapperInputs,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <WrapperTop />
      <WrapperCenter>
        <Title>Olá!</Title>
        <Subtitle>Seja bem-vindo.</Subtitle>
        <WrapperInputs>
          <Input placeholder="Email" icon={<Email color="#748C94" />} />

          <Input
            placeholder="Senha"
            icon={<Padlock color="#748C94" />}
            secureTextEntry
          />
        </WrapperInputs>
        <PrimaryButton>Entrar</PrimaryButton>
      </WrapperCenter>
      <WrapperBottom>
        <Description>Não tem uma conta? </Description>
        <DescriptionOrange>Criar conta</DescriptionOrange>
      </WrapperBottom>
    </Container>
  );
};

export default SignIn;
