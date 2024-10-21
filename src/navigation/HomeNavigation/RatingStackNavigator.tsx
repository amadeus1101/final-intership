import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import InDev from '../../screens/InDev';
import {AppStackOptions} from './AppStackOptions';

type RatingStackParamList = {
  Rating: undefined;
  Profile: undefined;
};

const RatingStack = createStackNavigator<RatingStackParamList>();

const RatingStackNavigator = () => {
  return (
    <RatingStack.Navigator
      initialRouteName="Rating"
      screenOptions={AppStackOptions as StackNavigationOptions}>
      <RatingStack.Screen name="Rating" component={InDev} />
      <RatingStack.Screen name="Profile" component={Profile} />
    </RatingStack.Navigator>
  );
};

export default RatingStackNavigator;
