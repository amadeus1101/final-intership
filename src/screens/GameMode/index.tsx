import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import ShadowButton from '../../components/ShadowButton';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import Title from '../../components/Title';
import Switcher from '../../widgets/Switcher';
import Wrapper from '../../components/Wrapper';

const GameMode = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <View>
        <View style={styles.preview}></View>
        <Header>{t('gameTitle')}</Header>
      </View>
      <View>
        <View style={styles.setting}>
          <Title>Time</Title>
          <ShadowButton content="10 min" event={() => {}} />
        </View>
        <View style={styles.setting}>
          <Title>{t('pieces')}</Title>
          <Switcher
            mode="background"
            items={['#ffffff; #ffffff', '#ffffff; #000000', '#000000; #000000']}
            activeId={1}
          />
        </View>
        <View style={styles.setting}>
          <Title>{t('rating')}</Title>
          <ShadowButton content="Yes" event={() => {}} />
        </View>
        <View style={styles.setting}>
          <ShadowButton content="-200" event={() => {}} />
          <Title>1560</Title>
          <ShadowButton content="+200" event={() => {}} />
        </View>
      </View>
      <MainButton active content={t('buttonPlay')} onClick={() => {}} />
    </Wrapper>
  );
};

export default GameMode;
