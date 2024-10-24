import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Puzzles from '../../screens/Puzzles';
import HeaderButton from '../components/HeaderButton';
import {arrow_icon} from '../../assets/img';
import {stackOptions} from '../stackOptions';
import {goBack} from '../RootNavigator';

export type PuzzlesStackParamList = {
  Puzzles: undefined;
};

const PuzzlesStack = createStackNavigator<PuzzlesStackParamList>();

const PuzzlesStackNavigator = () => {
  return (
    <PuzzlesStack.Navigator
      initialRouteName="Puzzles"
      screenOptions={{
        ...stackOptions,
        headerLeft: () => (
          <HeaderButton source={arrow_icon} onClick={() => goBack()} />
        ),
      }}>
      <PuzzlesStack.Screen
        name="Puzzles"
        component={Puzzles}
        options={{headerLeft: undefined}}
      />
    </PuzzlesStack.Navigator>
  );
};

export default PuzzlesStackNavigator;
