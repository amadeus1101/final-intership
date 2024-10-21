import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Puzzles from '../screens/Puzzles';
import HeaderButton from './components/HeaderButton';
import {arrow_icon} from '../assets/img';
import {stackOptions} from './stackOptions';

export type PuzzlesStackParamList = {
  Puzzles: undefined;
};
type PuzzlesStackProps = NativeStackScreenProps<
  PuzzlesStackParamList,
  'Puzzles'
>;

const PuzzlesStack = createStackNavigator<PuzzlesStackParamList>();

const PuzzlesStackNavigator = ({navigation, route}: PuzzlesStackProps) => {
  return (
    <PuzzlesStack.Navigator
      initialRouteName="Puzzles"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton
            source={arrow_icon}
            onClick={() => navigation.goBack()}
          />
        ),
      }}>
      <PuzzlesStack.Screen name="Puzzles" component={Puzzles} />
    </PuzzlesStack.Navigator>
  );
};

export default PuzzlesStackNavigator;
