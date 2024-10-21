import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import InDev from '../../screens/InDev';
import {AppStackOptions} from './AppStackOptions';

type SettingsStackParamList = {
  Settings: undefined;
};

const HomeStack = createStackNavigator<SettingsStackParamList>();

const SettingsStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Settings"
      screenOptions={AppStackOptions as StackNavigationOptions}>
      <HomeStack.Screen name="Settings" component={InDev} />
    </HomeStack.Navigator>
  );
};

export default SettingsStackNavigator;
