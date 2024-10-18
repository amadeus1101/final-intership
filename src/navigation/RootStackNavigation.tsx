import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Game from '../screens/Game';
import GameMode from '../screens/GameMode';
import Profile from '../screens/Profile';
import TimeMode from '../screens/TimeMode';

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
  GameMode: undefined;
  Profile: undefined;
  TimeMode: undefined;
};

const RootStackNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Game" component={Game} />
      <RootStack.Screen name="GameMode" component={GameMode} />
      <RootStack.Screen name="TimeMode" component={TimeMode} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigation;
