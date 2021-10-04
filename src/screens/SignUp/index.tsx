import React from 'react';

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
  DescriptionOrange,
  WrapperInputs,
} from './styles';

const SignUp: React.FC = () => {
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
        <DescriptionOrange>Faça o login</DescriptionOrange>
      </WrapperBottom>
    </Container>
  );
};

export default SignUp;
