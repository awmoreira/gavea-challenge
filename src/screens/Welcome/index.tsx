import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  WelcomeBackground,
  Container,
  WrapperLogo,
  Logo,
  Title,
  WrapperBottom,
  WrapperTop,
  WrapperButtons,
} from './styles';

import Images from '~/assets/images';
import Routes from '~/navigation/routes';
import {PrimaryButton, SecondaryButton} from '~/components/Button';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate(Routes.SIGN_IN);
  };

  const goToSignUp = () => {
    navigation.navigate(Routes.SIGN_UP);
  };

  return (
    <Container>
      <WelcomeBackground source={Images.Background}>
        <WrapperTop>
          <WrapperLogo>
            <Logo source={Images.Logo} />
          </WrapperLogo>
          <Title testID="title-welcome">
            Bem-vindo a sua bolsa digital de commodities
          </Title>
        </WrapperTop>
        <WrapperBottom>
          <WrapperButtons>
            <PrimaryButton testID="button-login" onPress={() => goToSignIn()}>
              Entrar
            </PrimaryButton>
            <SecondaryButton
              testID="button-register"
              onPress={() => goToSignUp()}>
              Criar conta
            </SecondaryButton>
          </WrapperButtons>
        </WrapperBottom>
      </WelcomeBackground>
    </Container>
  );
};

export default Welcome;
