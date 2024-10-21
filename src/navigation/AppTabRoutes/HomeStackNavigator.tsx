import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Game from '../../screens/Game';
import Home from '../../screens/Home';
import GameMode from '../../screens/GameMode';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackOptions} from '../stackOptions';
import HeaderButton from '../components/HeaderButton';
import {arrow_icon, user_icon} from '../../assets/img';
import Profile from '../../screens/Profile';

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  Game: undefined;
  GameMode: undefined;
};
type HomeStackProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = ({navigation, route}: HomeStackProps) => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={stackOptions}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <HeaderButton
              source={user_icon}
              onClick={() => navigation.navigate('Profile')}
            />
          ),
        }}
      />
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
      <HomeStack.Screen
        name="Profile"
        component={Profile}
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
