import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import RootTabNavigator from './RootTabNavigator';
import Splash from '../screens/Splash';
import AuthStackNavigator from './AuthNavigation/AuthStackNavigator';

const RootNavigator = () => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>('jj');

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      {userToken === null ? <AuthStackNavigator /> : <RootTabNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
