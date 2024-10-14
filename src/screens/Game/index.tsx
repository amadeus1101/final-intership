import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import {background_dark, background_light} from '../../assets/img';
import {styles} from './styles';
import MovesHistoryBar from '../../components/MovesHistoryBar';
import PlayerTab from '../../components/PlayerTab';
import Board from '../../components/Board';
import ShadowButton from '../../components/ShadowButton';

const Game = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MovesHistoryBar />

      <ImageBackground source={background_dark} style={styles.wrapper}>
        <PlayerTab />
        <View style={{flexDirection: 'row'}}>
          <ShadowButton />
          <ShadowButton />
          <ShadowButton />
        </View>

        <Board />
        <PlayerTab />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Game;
