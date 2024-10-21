import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabText from './components/TabText';
import TabIcon from './components/TabIcon';
import {useTranslation} from 'react-i18next';
import {
  focused_home_icon,
  focused_menu_icon,
  focused_puzzle_icon,
  focused_study_icon,
  home_icon,
  menu_icon,
  puzzle_icon,
  study_icon,
} from '../assets/img';
import Puzzles from '../screens/Puzzles';
import Settings from '../screens/Settings';
import Rating from '../screens/Rating';
import {tabOptions} from './tabOptions';
import HomeStackNavigator from './HomeStackNavigator';

export type AppTabParamList = {
  Home: undefined;
  Puzzle: undefined;
  Rating: undefined;
  Settings: undefined;
};

const AppTab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator = () => {
  const {t} = useTranslation();
  return (
    <AppTab.Navigator screenOptions={tabOptions} initialRouteName="Home">
      <AppTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarHome')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              src={home_icon}
              src_active={focused_home_icon}
              focused={focused}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Puzzle"
        component={Puzzles}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarPuzzle')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              src={puzzle_icon}
              src_active={focused_puzzle_icon}
              focused={focused}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Rating"
        component={Rating}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottombarStudy')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              src={study_icon}
              src_active={focused_study_icon}
              focused={focused}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('bottomBarSettings')} focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon
              src={menu_icon}
              src_active={focused_menu_icon}
              focused={focused}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
};

export default AppTabNavigator;
