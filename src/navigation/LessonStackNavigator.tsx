import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HeaderButton from './components/HeaderButton';
import {arrow_icon} from '../assets/img';
import {stackOptions} from './stackOptions';
import InDev from '../screens/InDev';
import Lessons from '../screens/Lessons';

export type LessonsStackParamList = {
  Lessons: undefined;
};
type LessonsStackProps = NativeStackScreenProps<
  LessonsStackParamList,
  'Lessons'
>;

const LessonsStack = createStackNavigator<LessonsStackParamList>();

const LessonsStackNavigator = ({navigation, route}: LessonsStackProps) => {
  return (
    <LessonsStack.Navigator
      initialRouteName="Lessons"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton
            source={arrow_icon}
            onClick={() => navigation.goBack()}
          />
        ),
      }}>
      <LessonsStack.Screen name="Lessons" component={Lessons} />
    </LessonsStack.Navigator>
  );
};

export default LessonsStackNavigator;
