import React, {useState} from 'react';
import {TextInputProps, Platform} from 'react-native';

import {Eye} from '~/assets/svgs';

import {
  Container,
  Label,
  WrapperInput,
  Input,
  WrapperMessage,
  ErrorText,
  WrapperShowPassword,
  WrapperIcon,
} from './styles';

interface ITextInput extends TextInputProps {
  label?: string;
  touched?: boolean;
  error?: string;
  icon?: React.ReactNode;
}

const TextInput: React.FC<ITextInput> = ({
  placeholder = 'default',
  label,
  touched,
  error,
  icon,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(rest.secureTextEntry);
  const isError = Boolean(touched && error);

  return (
    <Container>
      {Boolean(label) && <Label>{label}</Label>}
      <WrapperInput error={isError}>
        {icon && <WrapperIcon>{icon}</WrapperIcon>}
        <Input
          {...rest}
          placeholder={placeholder}
          ref={ref =>
            ref && ref.setNativeProps({style: {fontFamily: 'Karla-Regular'}})
          }
          placeholderTextColor="#B1BEC2"
          secureTextEntry={showPassword}
          keyboardType={
            rest.keyboardType
              ? rest.keyboardType
              : rest.secureTextEntry
              ? Platform.OS === 'ios'
                ? 'ascii-capable'
                : rest.keyboardType
              : rest.keyboardType
          }
        />
        {rest.secureTextEntry && (
          <WrapperShowPassword onPress={() => setShowPassword(e => !e)}>
            {showPassword ? <Eye color="#748C94" /> : <Eye color="#748C94" />}
          </WrapperShowPassword>
        )}
      </WrapperInput>

      {isError && (
        <WrapperMessage>
          <ErrorText>{error}</ErrorText>
        </WrapperMessage>
      )}
    </Container>
  );
};

export default TextInput;
