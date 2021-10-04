import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UnloggedRoutes from './Unlogged';
import LoggedRoutes from './Logged';

import Routes from './routes';
import {useAuth} from '~/contexts/Auth';

import LoadingScreen from '~/components/LoadingScreen';

const Stack = createStackNavigator();

const Main: React.FC = () => {
  const {storageLoading, signed} = useAuth();

  if (storageLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator initialRouteName={Routes.UNLOGGED}>
      {signed ? (
        <Stack.Screen
          name={Routes.LOGGED}
          component={LoggedRoutes}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={Routes.UNLOGGED}
          component={UnloggedRoutes}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationTypeForReplace: signed ? 'push' : 'pop',
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Main;
