import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Routes from '~/navigation';
import theme from '~/theme';
import {AuthProvider} from '~/contexts/Auth';

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
