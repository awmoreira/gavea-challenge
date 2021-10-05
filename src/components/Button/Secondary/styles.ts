import styled, {css} from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

interface ContainerProps {
  stretch: boolean;
}

export const Container = styled.View<ContainerProps>`
  ${({stretch}) =>
    !stretch &&
    css`
      align-items: flex-start;
    `};
`;

interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  margin?: boolean;
}

export const Button = styled.TouchableOpacity.attrs(() => ({
  delayPressIn: 0,
  activeOpacity: 0.5,
}))<ButtonProps>`
  height: 55px;
  padding: 0 15px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${props => (props.disabled ? 0.8 : 1)};
  margin: ${props => (props.margin ? '12px 0' : '0')};
  shadow-color: #000;
  shadow-offset: 0 5px;
  shadow-opacity: 0.4;
  shadow-radius: 5px;
  elevation: 5;
  border: 1px solid #ffffff;
  border-color: ${({theme, disabled}) =>
    disabled ? theme.colors?.gray[200] : theme.colors?.white};
  border-radius: 4px;
`;

export const Description = styled.Text.attrs({
  allowFontScaling: false,
})`
  font-family: ${({theme}) => theme.fonts?.inter[500]};
  font-size: 15px;
  color: ${({theme}) => theme.colors?.white};
  text-align: center;
`;

export const WrapperIcon = styled.View`
  margin-left: 19px;
`;
