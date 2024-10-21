import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Title from '../Title';
import Subtitle from '../Subtitle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStackNavigator';

const GameCard = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.preview}>
        <Image />
      </View>
      <View style={styles.content}>
        <Title>{t('gameTitle') + ' #1'}</Title>
        <Subtitle>{t('gameSubtitle')}</Subtitle>
        <View style={styles.rating}>
          <View style={styles.rating_icon}></View>
          <Text style={styles.rating_content}>{t('leagueSilver')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
