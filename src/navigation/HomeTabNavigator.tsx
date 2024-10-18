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
import TabText from './components/TabText';
import TabIcon from './components/TabIcon';
import {useTranslation} from 'react-i18next';

type HomeTabParamList = {
  Home: undefined;
  Puzzle: undefined;
  Rating: undefined;
  Settings: undefined;
};

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator = () => {
  const {t} = useTranslation();
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
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarHome')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon src={undefined} src_active={undefined} focused={focused} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Puzzle"
        component={Game}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarPuzzle')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon src={undefined} src_active={undefined} focused={focused} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Rating"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarStudy')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon src={undefined} src_active={undefined} focused={focused} />
          ),
        }}
      />
      <HomeTab.Screen
        name="Settings"
        component={GameMode}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottomBarSettings')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon src={undefined} src_active={undefined} focused={focused} />
          ),
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
