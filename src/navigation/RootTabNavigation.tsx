import React from 'react';
import Home from '../screens/Home';
import Game from '../screens/Game';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Home: undefined;
  Game: undefined;
  Profile: undefined;
};

const RootTabNavigation = () => {
  const RootTab = createBottomTabNavigator<RootTabParamList>();
  return (
    <RootTab.Navigator>
      <RootTab.Screen name="Home" component={Home} />
      <RootTab.Screen name="Game" component={Game} />
      <RootTab.Screen name="Profile" component={Profile} />
    </RootTab.Navigator>
  );
};

export default RootTabNavigation;
