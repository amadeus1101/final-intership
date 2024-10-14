import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import MainButton from '../../components/MainButton';
import {background_dark, background_light} from '../../assets/img';
import GameCardList from '../../widgets/GameCardList';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import PlayerTab from '../../components/PlayerTab';

const Home = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background_dark} style={styles.wrapper}>
        <PlayerTab />
        <GameCardList />
        <MainButton
          content={t('buttonPlay')}
          active={true}
          onClick={() => {}}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
