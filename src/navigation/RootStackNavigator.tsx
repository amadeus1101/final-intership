import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeTabNavigator from './HomeTabNavigator';
import Profile from '../screens/Profile';
import {Colors} from '../constants/Colors';

type RootStackParamList = {
  HomeTab: undefined;
  Profile: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="Profile" component={Profile} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
