import React from 'react';
import {FlatList, View} from 'react-native';
import {GameCard} from '../../components/GameCard/GameCard';
import {styles} from './styles';

const GameCardList = () => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      contentContainerStyle={styles.list}
      renderItem={({item}) => <GameCard />}
    />
  );
};

export default GameCardList;
