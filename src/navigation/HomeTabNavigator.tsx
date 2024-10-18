import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Game from '../screens/Game';
import Profile from '../screens/Profile';
import GameMode from '../screens/GameMode';
import {Colors} from '../constants/Colors';
import {background_dark, background_light, home_icon} from '../assets/img';
import {Button, Image, Text, View} from 'react-native';
import StackHeader from './components/StackHeader';
import TabButton from './components/TabButton';
import TabText from './components/TabText';
import TabIcon from './components/TabIcon';

type HomeTabParamList = {
  Home: undefined;
  Puzzle: undefined;
  Rating: undefined;
  Settings: undefined;
};

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black_black,
        },
        headerTitleStyle: {
          color: Colors.white,
          fontFamily: 'Ubuntu-Bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: Colors.black_black,
        },
        tabBarLabelStyle: {
          color: Colors.grey_light,
        },
      }}>
      <HomeTab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <StackHeader content="Home" icon_url={home_icon} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Puzzle"
        component={Game}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content="Puzzle" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon src={home_icon} src_active={undefined} focused={focused} />
          ),
        }}
      />
      <HomeTab.Screen name="Rating" component={Profile} />
      <HomeTab.Screen name="Settings" component={GameMode} />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
