import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {StyleSheet} from 'react-native';
import {
  Container,
  WrapperInfo,
  BoxInfo,
  Logo,
  Logout,
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
import theme from '~/theme';

import {useAuth} from '~/contexts/Auth';

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
  {
    id: 11,
    part: 'TrFood',
    pag: 'Fev/21',
    ton: '2.000',
    value: '164,50',
    transaction: 'credit',
    avatar: Images.AvatarTrFood,
  },
  {
    id: 12,
    part: 'GOSC',
    pag: 'Fev/21',
    ton: '2.000',
    value: '164,50',
    transaction: 'debit',
    avatar: Images.AvatarGosc,
  },
  {
    id: 13,
    part: 'AgCerr',
    pag: 'Fev/21',
    ton: '2.000',
    value: '164,50',
    transaction: 'debit',
    avatar: Images.AvatarAgCerr,
  },
  {
    id: 14,
    part: 'Agro1001',
    pag: 'Fev/21',
    ton: '2.000',
    value: '164,50',
    transaction: 'credit',
    avatar: Images.AvatarAgro1001,
  },
];

const Home: React.FC = () => {
  const {signOut, signInData} = useAuth();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 150],
        [150, 80],
        Extrapolate.CLAMP,
      ),
    };
  });

  const logoStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 150], [55, 45], Extrapolate.CLAMP),
      aspectRatio: 3 / 2,
    };
  });

  const boxStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 80], [1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <Container>
      <Animated.View style={[headerStyleAnimation, styles.header]}>
        <Animated.View style={[logoStyleAnimation, styles.wrapperLogo]}>
          <Logout onPress={signOut}>
            <Logo source={Images.Logo} />
          </Logout>
        </Animated.View>
      </Animated.View>
      <Animated.View style={[boxStyleAnimation]}>
        <WrapperInfo>
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
        </WrapperInfo>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 21,
          paddingTop: theme.metrics.statusHeight + 188,
          paddingBottom: theme.metrics.basePadding,
        }}
        style={{
          zIndex: -1,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
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
      </Animated.ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#01426a',
    alignItems: 'center',
  },
  wrapperLogo: {
    height: 55,
    marginTop: 33,
    marginBottom: 33,
  },
});
