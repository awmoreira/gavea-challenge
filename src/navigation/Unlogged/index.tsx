import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '~/screens/Welcome';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

import Routes from '../routes';

const Auth = createStackNavigator();

const noHeader = {
  headerShown: false,
};

const Unlogged: React.FC = () => {
  return (
    <Auth.Navigator initialRouteName={Routes.SIGN_IN}>
      <Auth.Screen
        name={Routes.WELCOME}
        component={Welcome}
        options={noHeader}
      />
      <Auth.Screen
        name={Routes.SIGN_IN}
        component={SignIn}
        options={noHeader}
      />
      <Auth.Screen
        name={Routes.SIGN_UP}
        component={SignUp}
        options={noHeader}
      />
    </Auth.Navigator>
  );
};

export default Unlogged;
