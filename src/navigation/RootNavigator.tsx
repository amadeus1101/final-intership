import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStackNavigator from './RootStackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
