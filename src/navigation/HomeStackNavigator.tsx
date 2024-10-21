import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Game from '../screens/Game';
import Home from '../screens/Home';
import GameMode from '../screens/GameMode';
import {NavigatorScreenParams} from '@react-navigation/native';
import {AppStackParamList} from './AppStackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackOptions} from './stackOptions';
import HeaderButton from './components/HeaderButton';
import {arrow_icon} from '../assets/img';

export type HomeStackParamList = {
  Home: NavigatorScreenParams<AppStackParamList>;
  Game: undefined;
  GameMode: undefined;
};
type HomeStackProps = NativeStackScreenProps<AppStackParamList, 'AppTab'>;

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = ({navigation, route}: HomeStackProps) => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={stackOptions}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Game"
        component={Game}
        options={{
          headerLeft: () => (
            <HeaderButton
              source={arrow_icon}
              onClick={() => navigation.goBack()}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="GameMode"
        component={GameMode}
        options={{
          headerLeft: () => (
            <HeaderButton
              source={arrow_icon}
              onClick={() => navigation.goBack()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
