import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import MainButton from '../../components/MainButton';
import {background_dark, background_light} from '../../assets/img';
import GameCardList from '../../widgets/GameCardList';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Wrapper from '../../components/Wrapper';

const Home = () => {
  const {t} = useTranslation();
  return (
    <Wrapper backgroundImage={background_dark}>
      <GameCardList />
      <MainButton content={t('buttonPlay')} active={true} onClick={() => {}} />
    </Wrapper>
  );
};

export default Home;
