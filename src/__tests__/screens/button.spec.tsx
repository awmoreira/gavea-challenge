import React from 'react';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';

import theme from '../../theme';
import {PrimaryButton} from '../../components/Button';

const Providers: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Button Component', () => {
  it('must have specific background color button and children not null', () => {
    const {getByTestId} = render(
      <PrimaryButton
        testID="button-primary"
        loading={false}
        disabled={false}
      />,
      {
        wrapper: Providers,
      },
    );
    const primaryButton = getByTestId('button-primary');

    expect(primaryButton.children).not.toBeNull();
    expect(primaryButton.props.style.backgroundColor).toEqual(
      theme.colors.orange,
    );
  });
});
