import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Options from '../../screens/Options';
import {stackOptions} from '../stackOptions';
import Profile from '../../screens/Profile';
import Rating from '../../screens/Rating';
import Settings from '../../screens/Settings';
import HeaderButton from '../components/HeaderButton';
import {arrow_icon} from '../../assets/img';
import {goBack} from '../RootNavigator';

export type OptionsStackParamList = {
  Options: undefined;
  Stats: undefined;
  Profile: undefined;
  Themes: undefined;
  Settings: undefined;
  Friend: undefined;
  Rating: undefined;
};

const OptionsStack = createStackNavigator<OptionsStackParamList>();

const OptionsStackNavigator = () => {
  return (
    <OptionsStack.Navigator
      initialRouteName="Options"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton source={arrow_icon} onClick={() => goBack()} />
        ),
      }}>
      <OptionsStack.Screen
        name="Options"
        component={Options}
        options={{headerLeft: undefined}}
      />
      <OptionsStack.Screen name="Profile" component={Profile} />
      <OptionsStack.Screen name="Rating" component={Rating} />
      <OptionsStack.Screen name="Settings" component={Settings} />
    </OptionsStack.Navigator>
  );
};

export default OptionsStackNavigator;
