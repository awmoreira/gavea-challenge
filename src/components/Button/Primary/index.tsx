import React from 'react';
import {GestureResponderEvent, ActivityIndicator} from 'react-native';

import Colors from '~/theme/colors';

import {Container, Button, Description, WrapperIcon} from './styles';

interface ButtonProps {
  stretch?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  margin?: boolean;
  Icon?: React.ReactNode;
  testID?: string;
}
const PrimaryButton: React.FC<ButtonProps> = ({
  stretch = true,
  onPress,
  loading = false,
  disabled = false,
  margin,
  children = 'Children',
  Icon,
  testID = '',
}) => (
  <Container stretch={stretch}>
    <Button
      onPress={onPress}
      disabled={disabled}
      margin={margin}
      testID={testID}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <>
          <Description>{children}</Description>
          {Icon && <WrapperIcon>{Icon}</WrapperIcon>}
        </>
      )}
    </Button>
  </Container>
);

export default PrimaryButton;
