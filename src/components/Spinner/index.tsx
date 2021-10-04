import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import Colors from '~/theme/colors';

const Spinner: React.FC<ActivityIndicatorProps> = ({
  color = Colors.white,
  size = 'small',
}) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default Spinner;
