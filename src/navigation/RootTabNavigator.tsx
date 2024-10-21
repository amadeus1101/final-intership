import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Colors} from '../constants/Colors';
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
import {View} from 'react-native';
import HomeStackNavigator from './HomeNavigation/HomeStackNavigator';
import PuzzleStackNavigator from './HomeNavigation/PuzzleStackNavigator';
import RatingStackNavigator from './HomeNavigation/RatingStackNavigator';
import SettingsStackNavigator from './HomeNavigation/SettingsStackNavigator';

type RootTabParamList = {
  HomeStack: undefined;
  PuzzleStack: undefined;
  RatingStack: undefined;
  SettingsStack: undefined;
};

const RootTab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  const {t} = useTranslation();
  return (
    <RootTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.black_black,
        },
        tabBarLabelStyle: {
          color: Colors.grey_light,
        },
      }}
      initialRouteName="HomeStack">
      <RootTab.Screen
        name="HomeStack"
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
      <RootTab.Screen
        name="PuzzleStack"
        component={PuzzleStackNavigator}
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
      <RootTab.Screen
        name="RatingStack"
        component={RatingStackNavigator}
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
      <RootTab.Screen
        name="SettingsStack"
        component={SettingsStackNavigator}
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
    </RootTab.Navigator>
  );
};

export default RootTabNavigator;
