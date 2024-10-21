import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RootTabNavigator from './AppTabNavigator';
import Game from '../screens/Game';
import GameMode from '../screens/GameMode';
import TimeMode from '../screens/TimeMode';
import Profile from '../screens/Profile';
import {stackOptions} from './stackOptions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderButton from './components/HeaderButton';
import {arrow_icon, user_icon} from '../assets/img';

export type AppStackParamList = {
  AppTab: undefined;
  Game: undefined;
  GameMode: undefined;
  TimeMode: undefined;
  Profile: undefined;
};
type AppStackProps = NativeStackScreenProps<AppStackParamList, 'AppTab'>;

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackNavigator = ({navigation}: AppStackProps) => {
  return (
    <AppStack.Navigator initialRouteName="AppTab" screenOptions={stackOptions}>
      <AppStack.Screen
        name="AppTab"
        component={RootTabNavigator}
        options={{headerShown: false}}
      />
      <AppStack.Screen name="Game" component={Game} />
      <AppStack.Screen name="GameMode" component={GameMode} />
      <AppStack.Screen name="TimeMode" component={TimeMode} />
      <AppStack.Screen name="Profile" component={Profile} />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
