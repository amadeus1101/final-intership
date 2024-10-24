import React, {useEffect, useState} from 'react';
import Splash from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import {navigationRef} from './src/services/navigator/Navigator';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  if (isLoading) return <Splash />;

  useEffect(() => {
    const initializeFirebase = async () => {
      console.log('firebase initialized');

      // await auth().createUserWithEmailAndPassword(
      //   'testuser@example.com',
      //   'qwerty12345',
      // );
    };
    initializeFirebase();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {userToken === null ? <AuthStackNavigator /> : <AppStackNavigator />}
    </NavigationContainer>
  );
};

export default App;
