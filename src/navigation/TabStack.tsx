import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabNavigatorParamList } from './types';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Favourites from '../screens/Favourites';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Favourites" component={Favourites} />
    </Tab.Navigator>
  );
};

export default BottomTabs;