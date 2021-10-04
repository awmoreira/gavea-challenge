import * as React from 'react';
import Dropdown from 'react-native-dropdownalert';

import Metrics from '~/theme/metrics';

const dropdownRef = React.createRef<Dropdown>();

export const DropdownAlert = () => {
  return (
    <Dropdown
      ref={dropdownRef}
      updateStatusBar={false}
      zIndex={10}
      defaultContainer={{
        padding: 10,
        paddingLeft: 15,
        paddingTop: Metrics.statusHeight + 10,
      }}
      elevation={5}
    />
  );
};

export default dropdownRef;
