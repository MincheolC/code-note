import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
