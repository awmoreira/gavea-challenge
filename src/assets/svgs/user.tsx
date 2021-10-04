import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

import Colors from '~/theme/colors';

interface ISvg {
  color?: string;
  size?: number;
  style?: ViewStyle;
}

const User: React.FC<ISvg> = ({color = Colors.gray[400], size = 20, style}) => {
  return (
    <View style={[{width: size, height: size}, style]}>
      <Svg width="14" height="19" viewBox="0 0 14 19" fill="none">
        <Path
          d="M13.6666 18.3333H11.9999V16.6667C11.9999 16.0036 11.7365 15.3678 11.2677 14.8989C10.7988 14.4301 10.163 14.1667 9.49992 14.1667H4.49992C3.83688 14.1667 3.20099 14.4301 2.73215 14.8989C2.26331 15.3678 1.99992 16.0036 1.99992 16.6667V18.3333H0.333252V16.6667C0.333252 15.5616 0.772239 14.5018 1.55364 13.7204C2.33504 12.939 3.39485 12.5 4.49992 12.5H9.49992C10.605 12.5 11.6648 12.939 12.4462 13.7204C13.2276 14.5018 13.6666 15.5616 13.6666 16.6667V18.3333ZM6.99992 10.8333C6.34331 10.8333 5.69313 10.704 5.0865 10.4527C4.47987 10.2015 3.92868 9.83317 3.46438 9.36888C3.00009 8.90458 2.63179 8.35339 2.38052 7.74676C2.12925 7.14013 1.99992 6.48995 1.99992 5.83334C1.99992 5.17673 2.12925 4.52655 2.38052 3.91993C2.63179 3.3133 3.00009 2.7621 3.46438 2.29781C3.92868 1.83352 4.47987 1.46522 5.0865 1.21395C5.69313 0.962672 6.34331 0.833343 6.99992 0.833344C8.326 0.833344 9.59777 1.36013 10.5355 2.29781C11.4731 3.23549 11.9999 4.50726 11.9999 5.83334C11.9999 7.15943 11.4731 8.4312 10.5355 9.36888C9.59777 10.3066 8.326 10.8333 6.99992 10.8333ZM6.99992 9.16668C7.88397 9.16668 8.73182 8.81549 9.35694 8.19037C9.98206 7.56525 10.3333 6.7174 10.3333 5.83334C10.3333 4.94929 9.98206 4.10144 9.35694 3.47632C8.73182 2.8512 7.88397 2.50001 6.99992 2.50001C6.11586 2.50001 5.26802 2.8512 4.6429 3.47632C4.01777 4.10144 3.66658 4.94929 3.66658 5.83334C3.66658 6.7174 4.01777 7.56525 4.6429 8.19037C5.26802 8.81549 6.11586 9.16668 6.99992 9.16668Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default User;
