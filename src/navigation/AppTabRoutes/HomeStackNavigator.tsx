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
import {goBack, navigate} from '../RootNavigator';
import TimeMode from '../../screens/TimeMode';

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  Game: undefined;
  GameMode: undefined;
  TimeMode: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton source={arrow_icon} onClick={() => goBack()} />
        ),
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <HeaderButton
              source={user_icon}
              onClick={() => navigate('Profile')}
            />
          ),
          headerLeft: undefined,
        }}
      />
      <HomeStack.Screen name="Game" component={Game} />
      <HomeStack.Screen name="GameMode" component={GameMode} />
      <HomeStack.Screen name="TimeMode" component={TimeMode} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
