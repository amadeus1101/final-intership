import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Title from '../Title';

const GameCard = () => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.preview}>
        <Image />
      </View>
      <View style={styles.content}>
        <Title>{t('gameTitle') + ' #1'}</Title>
        <Text style={styles.subtitle}>{t('gameSubtitle')}</Text>
        <View style={styles.rating}>
          <View style={styles.rating_icon}></View>
          <Text style={styles.rating_content}>{t('leagueSilver')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
