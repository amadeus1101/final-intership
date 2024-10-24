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
import {tabOptions} from './tabOptions';
import HomeStackNavigator from './AppTabRoutes/HomeStackNavigator';
import PuzzleStackNavigator from './AppTabRoutes/PuzzleStackNavigator';
import LessonStackNavigator from './AppTabRoutes/LessonStackNavigator';
import OptionsStackNavigator from './AppTabRoutes/OptionsStackNavigator';

export type AppTabParamList = {
  HomeStack: undefined;
  PuzzlesStack: undefined;
  LessonsStack: undefined;
  OptionsStack: undefined;
};

const AppTab = createBottomTabNavigator<AppTabParamList>();

const AppTabNavigator = () => {
  const {t} = useTranslation();
  return (
    <AppTab.Navigator screenOptions={tabOptions} initialRouteName="HomeStack">
      <AppTab.Screen
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
      <AppTab.Screen
        name="PuzzlesStack"
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
      <AppTab.Screen
        name="LessonsStack"
        component={LessonStackNavigator}
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
        name="OptionsStack"
        component={OptionsStackNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <TabText content={t('Options')} focused={focused} />
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
