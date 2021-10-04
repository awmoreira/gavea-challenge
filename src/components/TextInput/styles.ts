import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-size: 12px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.gray[400]};
  margin-bottom: 8px;
`;

interface IWrapperInput {
  error: boolean;
}

export const WrapperInput = styled.View<IWrapperInput>`
  height: 58px;
  padding: 20px 5.5px 19.5px 19.5px;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d2e3ef;
  border-radius: 4px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: ${() => (Platform.OS === 'ios' ? 0 : 5)}px 0 0 0;
  color: ${({theme, editable}) =>
    editable === false ? theme.colors.gray[200] : theme.colors.gray[400]};
  font-family: ${({theme}) => theme.fonts.karla.regular};
  font-size: 16px;
  color: #b1bec2;
`;

export const WrapperMessage = styled.View`
  margin-top: 10px;
  min-height: 16px;
`;

export const ErrorText = styled.Text`
  font-family: ${({theme}) => theme.fonts.karla.regular};
  font-size: 12px;
  color: ${({theme}) => theme.colors.warning};
`;

export const WrapperShowPassword = styled.TouchableOpacity`
  padding-right: 20.25px;
`;

export const WrapperIcon = styled.View`
  width: 18px;
  margin-right: 17.67px;
`;
