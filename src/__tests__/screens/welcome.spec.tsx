import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';

import theme from '../../theme';
import Welcome from '../../screens/Welcome';

jest.useFakeTimers();

const Providers: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Welcome', () => {
  it('renders the correct screen', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Welcome />
      </NavigationContainer>,
      {
        wrapper: Providers,
      },
    );

    const screenText = getByText(
      'Bem-vindo a sua bolsa digital de commodities',
    );

    expect(screenText).toBeTruthy();
  });
});
