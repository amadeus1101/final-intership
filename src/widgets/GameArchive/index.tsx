import React from 'react';
import {FlatList, View} from 'react-native';
import Title from '../../components/Title';
import {useTranslation} from 'react-i18next';
import GameCardMini from '../../components/GameCardMini';
import ShadowButton from '../../components/ShadowButton';

const GameArchive = () => {
  const {t} = useTranslation();
  return (
    <View>
      <Title>{t('lastGames')}</Title>
      <GameCardMini />
      <GameCardMini />
      <GameCardMini />
      <ShadowButton content={t('showmore')} event={() => {}} />
    </View>
  );
};

export default GameArchive;
