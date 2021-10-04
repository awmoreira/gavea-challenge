import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  min-height: 150px;
  background-color: #01426a;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  margin-horizontal: 21px;
`;

export const BoxInfo = styled.View`
  position: relative;
  bottom: 38px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
  border-radius: 7px;
  margin-horizontal: 21px;
  padding: 15px 16px;
  flex-direction: row;
  align-items: center;
`;

export const WrapperLogo = styled.TouchableOpacity`
  width: 99px;
  height: 45.66px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

export const InitialsName = styled.View`
  width: 50px;
  height: 50px;
  padding: 13px;
  background: #5998c5;
  box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TwoLetters = styled.Text`
  font-family: ${({theme}) => theme.fonts.karla.regular};
  font-weight: normal;
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;

export const Column = styled.View`
  flex-direction: column;
  margin-left: 13px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: 600;
  font-size: 20px;
  color: ${({theme}) => theme.colors.blackBlue};
  margin-bottom: 5px;
`;

export const Provider = styled.Text`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: normal;
  font-size: 14px;
  color: ${({theme}) => theme.colors.text};
`;

export const WrapperHeaderList = styled.View`
  height: 15px;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4px;
  margin-bottom: 4px;
`;

interface IText {
  width?: string;
}

export const HeaderList = styled.Text<IText>`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: 500;
  font-size: 12px;

  color: #b1bec2;
  width: ${({width}) => width || 'auto'};
`;

export const ListItem = styled.View`
  height: 50px;
  border: 1px solid #d2e3ef;
  border-radius: 4px;
  margin-bottom: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px 18px 0px;
`;

interface IListColor {
  transaction?: string;
}

export const ListColor = styled.View<IListColor>`
  height: 50px;
  width: 5px;
  background-color: ${({theme, transaction}) =>
    transaction === 'debit'
      ? theme.colors.warning
      : transaction === 'credit'
      ? theme.colors.success
      : 'transparent'};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

export const WrapperAvatar = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 10px;
`;

export const AvatarItem = styled.Image``;

interface ITextItem {
  transaction?: string;
  width?: string;
}

export const TextItem = styled.Text<ITextItem>`
  height: 18px;
  font-family: ${({theme}) => theme.fonts.inter.regular};

  font-weight: normal;
  font-size: 15px;

  color: ${({theme, transaction}) =>
    transaction === 'debit'
      ? theme.colors.warning
      : transaction === 'credit'
      ? theme.colors.success
      : '#47595F'};
  width: ${({width}) => width || 'auto'};
`;
