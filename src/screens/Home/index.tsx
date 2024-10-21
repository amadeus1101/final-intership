import React from 'react';
import MainButton from '../../components/MainButton';
import {background_dark, background_light} from '../../assets/img';
import GameCardList from '../../widgets/GameCardList';
import {useTranslation} from 'react-i18next';
import Wrapper from '../../components/Wrapper';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import {styles} from './styles';

const Home = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <GameCardList />
      <MainButton content={t('buttonPlay')} active={true} onClick={() => {}} />
    </Wrapper>

    // <SafeAreaView style={styles.container}>
    //   <ImageBackground source={background_dark} style={styles.background}>
    //     <GameCardList />
    //     <MainButton
    //       content={t('buttonPlay')}
    //       active={true}
    //       onClick={() => {}}
    //     />
    //   </ImageBackground>
    // </SafeAreaView>
  );
};

export default Home;
