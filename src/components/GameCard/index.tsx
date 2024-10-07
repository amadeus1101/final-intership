import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

const GameCard = () => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.preview}></View>
      <View style={styles.content}>
        <Text style={styles.title}>{t('gameTitle') + ' #1'}</Text>
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
