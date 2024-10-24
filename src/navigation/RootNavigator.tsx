import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React, {useState} from 'react';
import Splash from '../screens/Splash';
import AuthStackNavigator from './AuthStackNavigator';
import AppStackNavigator from './AppStackNavigator';

export const navigationRef = createNavigationContainerRef();

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}
/*
navigate<RouteName extends never>(options: RouteName extends unknown ? 
  { key: string; 
   params?: ReactNavigation.RootParamList[RouteName] | undefined; 
   merge?: boolean; } | 
  { name: RouteName; 
   key?: string; 
   params: ReactNavigation.RootParamList[RouteName]; 
   merge?: boolean; } 
: never): void
*/
export function navigate(screen: string) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen);
  }
}

const RootNavigator = () => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>('jk');

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer ref={navigationRef}>
      {userToken === null ? <AuthStackNavigator /> : <AppStackNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
