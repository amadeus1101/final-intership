import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import MainButton from '../../components/MainButton';
import {background_dark, background_light} from '../../assets/img';
import {GameCardList} from '../../widgets/GameCardList/GameCardList';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background_dark} style={styles.wrapper}>
        <GameCardList />
        <MainButton content={t('buttonPlay')} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
