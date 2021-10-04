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

const Home: React.FC = () => {
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
        <WrapperLogo>
          <Logo source={Images.Logo} />
        </WrapperLogo>
      </Header>
      <BoxInfo>
        <InitialsName>
          <TwoLetters>Fr</TwoLetters>
        </InitialsName>
        <Column>
          <Name>Olá, Allan Winckler</Name>
          <Provider>Gavea Marketplace</Provider>
        </Column>
      </BoxInfo>
      <Wrapper>
        <WrapperHeaderList>
          <ListColor />
          <WrapperAvatar />
          <HeaderList width={91}>Part</HeaderList>
          <HeaderList width={64}>Pag</HeaderList>
          <HeaderList width={62}>Ton</HeaderList>
          <HeaderList>R$</HeaderList>
        </WrapperHeaderList>
        {items.map(item => (
          <ListItem>
            <ListColor transaction={item.transaction} />
            <WrapperAvatar>
              <AvatarItem source={item.avatar} resizeMode="contain" />
            </WrapperAvatar>
            <TextItem width={91}>{item.part}</TextItem>
            <TextItem width={64}>{item.pag}</TextItem>
            <TextItem width={62}>{item.ton}</TextItem>
            <TextItem transaction={item.transaction}>{item.value}</TextItem>
          </ListItem>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Home;
