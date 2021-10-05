import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WelcomeBackground = styled.ImageBackground`
  flex: 1;
`;

export const WrapperTop = styled.View`
  margin: 45px 21px 0px;
`;

export const WrapperBottom = styled.View`
  height: 130px;
  position: absolute;
  bottom: 68px;
  width: ${({theme}) => theme.metrics?.screenWidth};
`;

export const WrapperLogo = styled.View`
  position: absolute;
  top: ${({theme}) => (theme.metrics?.screenWidth <= 375 ? '0px' : '45px')};
  left: 21px;
`;

export const Logo = styled.Image`
  width: 117.83px;
  height: 54.34px;
`;

export const Title = styled.Text`
  width: 290px;
  position: absolute;
  left: 21px;
  top: ${({theme}) => (theme.metrics?.screenWidth <= 375 ? '252px' : '299px')};
  font-family: ${({theme}) => theme.fonts?.inter?.regular};
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
`;

export const WrapperButtons = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-left: 21px;
  margin-right: 21px;
`;
