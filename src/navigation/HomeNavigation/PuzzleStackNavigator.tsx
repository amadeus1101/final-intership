import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import Game from '../../screens/Game';
import Puzzles from '../../screens/Puzzles';
import {AppStackOptions} from './AppStackOptions';

type PuzzleStackParamList = {
  Puzzle: undefined;
  Game: undefined;
};

const PuzzleStack = createStackNavigator<PuzzleStackParamList>();

const PuzzleStackNavigator = () => {
  return (
    <PuzzleStack.Navigator
      initialRouteName="Puzzle"
      screenOptions={AppStackOptions as StackNavigationOptions}>
      <PuzzleStack.Screen name="Puzzle" component={Puzzles} />
      <PuzzleStack.Screen name="Game" component={Game} />
    </PuzzleStack.Navigator>
  );
};

export default PuzzleStackNavigator;
