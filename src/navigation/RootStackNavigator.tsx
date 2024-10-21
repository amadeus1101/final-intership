import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeTabNavigator from './RootTabNavigator';

type RootStackParamList = {
  RootTab: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="RootTab"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
