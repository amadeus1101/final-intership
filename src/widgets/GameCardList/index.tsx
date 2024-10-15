import React from 'react';
import {FlatList, View} from 'react-native';
import GameCard from '../../components/GameCard';
import {styles} from './styles';
import GameCardSkeleton from '../../components/GameCard/skeleton';

const GameCardList = () => {
  return (
    <>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        contentContainerStyle={styles.list}
        renderItem={({item}) => <GameCard />}
        keyExtractor={num => num.toString()}
      />
    </>
  );
};

export default GameCardList;
