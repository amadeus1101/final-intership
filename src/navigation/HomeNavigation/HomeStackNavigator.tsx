import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/Home';
import Game from '../../screens/Game';
import GameMode from '../../screens/GameMode';
import {AppStackOptions} from './AppStackOptions';

type HomeStackParamList = {
  Home: undefined;
  Game: undefined;
  GameMode: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={AppStackOptions as StackNavigationOptions}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Game" component={Game} />
      <HomeStack.Screen name="GameMode" component={GameMode} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
