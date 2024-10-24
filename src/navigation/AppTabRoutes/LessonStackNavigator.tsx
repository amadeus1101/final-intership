import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HeaderButton from '../components/HeaderButton';
import {arrow_icon} from '../../assets/img';
import {stackOptions} from '../stackOptions';
import Lessons from '../../screens/Lessons';
import {goBack} from '../RootNavigator';

export type LessonsStackParamList = {
  Lessons: undefined;
};

const LessonsStack = createStackNavigator<LessonsStackParamList>();

const LessonsStackNavigator = () => {
  return (
    <LessonsStack.Navigator
      initialRouteName="Lessons"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton source={arrow_icon} onClick={() => goBack()} />
        ),
      }}>
      <LessonsStack.Screen
        name="Lessons"
        component={Lessons}
        options={{headerLeft: undefined}}
      />
    </LessonsStack.Navigator>
  );
};

export default LessonsStackNavigator;
