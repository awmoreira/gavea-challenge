import React from 'react';

import { WelcomeBackground, Container, WrapperLogo, Logo, Title, WrapperBottom, WrapperTop, WrapperButtons } from './styles';

import Images from '~/assets/images'
import { PrimaryButton, SecondaryButton } from '~/components/Button'

const Welcome: React.FC = () => {
    return (
        <Container>
            <WelcomeBackground source={Images.Background}>
                <WrapperTop>
                    <WrapperLogo><Logo source={Images.Logo} /></WrapperLogo>
                    <Title>Bem-vindo a sua bolsa digital de commodities</Title>
                </WrapperTop>
                <WrapperBottom>
                    <WrapperButtons>
                        <PrimaryButton>Entrar</PrimaryButton>
                        <SecondaryButton>Criar conta</SecondaryButton>
                    </WrapperButtons>
                </WrapperBottom>
            </WelcomeBackground>
            <WrapperBottom>

            </WrapperBottom>
        </Container>
    );
};

export default Welcome;
