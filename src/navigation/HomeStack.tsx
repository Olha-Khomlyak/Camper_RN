import * as React from 'react';
import {MainStack, MainRoutes} from './routes';

import Home from '../screens/Home';
import Details from '../screens/Details';
import Colors from '../constnats/colors';

const HomeStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={MainRoutes.HOME} component={Home} />
      <MainStack.Screen
        name={MainRoutes.DETAILS}
        component={Details}
        options={({}) => ({headerShown: false})}
      />
    </MainStack.Navigator>
  );
};

export default HomeStackNavigator;
