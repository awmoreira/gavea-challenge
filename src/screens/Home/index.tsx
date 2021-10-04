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
      id: 0,
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      id: 1,
      part: 'TrFood',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarTrFood,
    },
    {
      id: 2,
      part: 'GOSC',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'debit',
      avatar: Images.AvatarGosc,
    },
    {
      id: 3,
      part: 'AgCerr',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'debit',
      avatar: Images.AvatarAgCerr,
    },
    {
      id: 4,
      part: 'Agro1001',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgro1001,
    },
    {
      id: 5,
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      id: 6,
      part: 'TrFood',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarTrFood,
    },
    {
      id: 7,
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      id: 8,
      part: 'Agro1001',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgro1001,
    },
    {
      id: 9,
      part: 'AgAmerica',
      pag: 'Fev/21',
      ton: '2.000',
      value: '164,50',
      transaction: 'credit',
      avatar: Images.AvatarAgAmerica,
    },
    {
      id: 10,
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
          <TwoLetters>{`${
            signInData?.profile?.fullname &&
            signInData?.profile?.fullname.split(' ')[0].substring(0, 1)
          }${
            signInData?.profile?.fullname &&
            signInData?.profile?.fullname.split(' ')[1].substring(0, 1)
          }`}</TwoLetters>
        </InitialsName>
        <Column>
          <Name>{`Olá, ${
            signInData?.profile?.fullname &&
            signInData?.profile?.fullname.split(' ')[0]
          } ${
            signInData?.profile?.fullname &&
            signInData?.profile?.fullname.split(' ')[1]
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
          <ListItem key={item.id}>
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
