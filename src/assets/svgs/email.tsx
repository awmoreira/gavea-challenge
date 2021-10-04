import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

import Colors from '~/theme/colors';

interface ISvg {
  color?: string;
  size?: number;
  style?: ViewStyle;
}

const Email: React.FC<ISvg> = ({
  color = Colors.gray[400],
  size = 20,
  style,
}) => {
  return (
    <View style={[{width: size, height: size}, style]}>
      <Svg width="18" height="16" viewBox="0 0 18 16" fill="none">
        <Path
          d="M1.49984 0.5H16.4998C16.7209 0.5 16.9328 0.587797 17.0891 0.744078C17.2454 0.900358 17.3332 1.11232 17.3332 1.33333V14.6667C17.3332 14.8877 17.2454 15.0996 17.0891 15.2559C16.9328 15.4122 16.7209 15.5 16.4998 15.5H1.49984C1.27882 15.5 1.06686 15.4122 0.910582 15.2559C0.754301 15.0996 0.666504 14.8877 0.666504 14.6667V1.33333C0.666504 1.11232 0.754301 0.900358 0.910582 0.744078C1.06686 0.587797 1.27882 0.5 1.49984 0.5ZM15.6665 4.03167L9.05984 9.94833L2.33317 4.01333V13.8333H15.6665V4.03167ZM2.759 2.16667L9.05067 7.71833L15.2515 2.16667H2.759Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Email;
