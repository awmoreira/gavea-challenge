import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Routes from '~/navigation';
import {DropdownAlert} from '~/components/DropdownAlert';
import theme from '~/theme';
import {AuthProvider} from '~/contexts/Auth';

LogBox.ignoreAllLogs();

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <DropdownAlert />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
