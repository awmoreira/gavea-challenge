import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/navigation';
import theme from '~/theme';
import {AuthProvider} from '~/contexts/Auth';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
