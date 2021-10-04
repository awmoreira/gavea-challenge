import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '~/screens/Home';

import Routes from '../routes';

const Stack = createStackNavigator();

const noHeader = {
  headerShown: false,
};

const Logged = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.HOME}>
      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={noHeader}
      />
    </Stack.Navigator>
  );
};

export default Logged;
