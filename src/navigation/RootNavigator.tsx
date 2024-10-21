import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Splash from '../screens/Splash';
import AuthStackNavigator from './AuthNavigation/AuthStackNavigator';
import AppTabNavigator from './AppTabNavigator';

const RootNavigator = () => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>('jk');

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      {userToken === null ? <AuthStackNavigator /> : <AppTabNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
