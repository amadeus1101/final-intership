import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStackNavigation';
import RootTabNavigation from './RootTabNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
      <RootTabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
