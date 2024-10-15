import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import ShadowButton from '../../components/ShadowButton';
import MainButton from '../../components/MainButton';

const GameManager = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <View>{t('gameTitle')}</View>
      <Header>{t('gameTitle')}</Header>
      <ShadowButton content="10 min" event={() => {}} />
      <View>
        <Text>{t('pieces')}</Text>
      </View>
      <View>
        <Text>{t('rating')}</Text>
      </View>
      <View>
        <ShadowButton content="-200" event={() => {}} />
        <Text>1560</Text>
        <ShadowButton content="+200" event={() => {}} />
      </View>
      <MainButton active content={t('buttonPlay')} onClick={() => {}} />
    </SafeAreaView>
  );
};

export default GameManager;
