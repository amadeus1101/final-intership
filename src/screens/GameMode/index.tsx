import React from 'react';
import {Image, View} from 'react-native';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import ShadowButton from '../../components/ShadowButton';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import Title from '../../components/Title';
import Switcher from '../../components/Switcher';
import Wrapper from '../../components/Wrapper';
import {ScrollView} from 'react-native-gesture-handler';
import {navigate} from '../../navigation/RootNavigator';
import {board_icon} from '../../assets/img';

const GameMode = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.preview}>
          <Image source={board_icon} style={styles.image} />
        </View>
        <Header>{t('gameTitle')}</Header>
        <View>
          <View style={styles.setting}>
            <ShadowButton content="10 min" event={() => navigate('TimeMode')} />
          </View>
          <View style={styles.setting}>
            <Title>{t('pieces')}</Title>
            <Switcher
              mode="background"
              items={[
                '#ffffff; #ffffff',
                '#ffffff; #000000',
                '#000000; #000000',
              ]}
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
      </ScrollView>
      <MainButton
        active
        content={t('buttonPlay')}
        onClick={() => navigate('Game')}
      />
    </Wrapper>
  );
};

export default GameMode;
