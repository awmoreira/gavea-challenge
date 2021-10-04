import React from 'react';

import {
  Container,
  Header,
  BoxInfo,
  WrapperLogo,
  Logo,
  Wrapper,
  InitialsName,
  TwoLetters,
  Column,
  Name,
  Provider,
  WrapperHeaderList,
  HeaderList,
  ListItem,
  ListColor,
  WrapperAvatar,
  AvatarItem,
  TextItem,
} from './styles';
import Images from '~/assets/images';

import {useAuth} from '~/contexts/Auth';

const Home: React.FC = () => {
  const {signOut, signInData} = useAuth();
  const items = [
    {
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      part: 'TrFood',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarTrFood,
    },
    {
      part: 'GOSC',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'debit',
      avatar: Images.AvatarGosc,
    },
    {
      part: 'AgCerr',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'debit',
      avatar: Images.AvatarAgCerr,
    },
    {
      part: 'Agro1001',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgro1001,
    },
    {
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      part: 'TrFood',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarTrFood,
    },
    {
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      part: 'Agro1001',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgro1001,
    },
    {
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      part: 'TrFood',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarTrFood,
    },
  ];

  return (
    <Container>
      <Header>
        <WrapperLogo onPress={signOut}>
          <Logo source={Images.Logo} />
        </WrapperLogo>
      </Header>
      <BoxInfo>
        <InitialsName>
          <TwoLetters>{`${signInData?.fullname
            .split(' ')[0]
            .substring(0, 1)}${signInData?.fullname
            .split(' ')[1]
            .substring(0, 1)}`}</TwoLetters>
        </InitialsName>
        <Column>
          <Name>{`Olá, ${signInData?.fullname.split(' ')[0]} ${
            signInData?.fullname.split(' ')[1]
          }`}</Name>
          <Provider>Gavea Marketplace</Provider>
        </Column>
      </BoxInfo>
      <Wrapper>
        <WrapperHeaderList>
          <ListColor />
          <WrapperAvatar />
          <HeaderList width="91px">Part</HeaderList>
          <HeaderList width="64px">Pag</HeaderList>
          <HeaderList width="62px">Ton</HeaderList>
          <HeaderList>R$</HeaderList>
        </WrapperHeaderList>
        {items.map(item => (
          <ListItem>
            <ListColor transaction={item.transaction} />
            <WrapperAvatar>
              <AvatarItem source={item.avatar} resizeMode="contain" />
            </WrapperAvatar>
            <TextItem width="91px">{item.part}</TextItem>
            <TextItem width="64px">{item.pag}</TextItem>
            <TextItem width="62px">{item.ton}</TextItem>
            <TextItem transaction={item.transaction}>{item.value}</TextItem>
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;
