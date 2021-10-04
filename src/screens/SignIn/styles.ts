import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
`;

export const WrapperCenter = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  padding-horizontal: 21px;
  justify-content: center;
`;

export const WrapperBottom = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 38px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: 600;
  font-size: 35px;

  color: ${({theme}) => theme.colors.orange};
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: 600;
  font-size: 35px;

  color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.karla.regular};
  font-weight: 400;
  font-size: 15px;

  color: ${({theme}) => theme.colors.text};
`;

export const ButtonOrange = styled.TouchableOpacity``;

export const DescriptionOrange = styled.Text`
  font-family: ${({theme}) => theme.fonts.karla.bold};
  font-weight: 700;
  font-size: 15px;

  color: ${({theme}) => theme.colors.orange};
`;

export const WrapperInputs = styled.View`
  min-height: 125px;
  margin-top: 31px;
  margin-bottom: 30px;
  justify-content: space-around;
`;
