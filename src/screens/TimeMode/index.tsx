import React from 'react';
import Wrapper from '../../components/Wrapper';
import {ScrollView, View} from 'react-native';
import MainButton from '../../components/MainButton';
import {useTranslation} from 'react-i18next';
import Title from '../../components/Title';
import Switcher from '../../components/Switcher';
import {styles} from './styles';
import {goBack} from '../../navigation/RootNavigator';

const TimeMode = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <ScrollView style={styles.content}>
        <View style={styles.list_item}>
          <Title>{t('gameModeBullet')}</Title>
          <Switcher
            mode="text"
            items={['1 min', '1 | 1', '2 | 1']}
            activeId={-1}
          />
        </View>
        <View style={styles.list_item}>
          <Title>{t('gameModeBlitz')}</Title>
          <Switcher
            mode="text"
            items={['3 min', '3 | 2', '5 min']}
            activeId={1}
          />
        </View>
        <View style={styles.list_item}>
          <Title>{t('gameModeRapid')}</Title>
          <Switcher
            mode="text"
            items={['10 min', '10 | 15', '30 min']}
            activeId={1}
          />
        </View>
        <View style={styles.list_item}>
          <Title>{t('gameModeCorrespondence')}</Title>
          <Switcher
            mode="text"
            items={['1 day', '3 days', '7 days']}
            activeId={-1}
          />
        </View>
      </ScrollView>
      <MainButton content={t('buttonNext')} active onClick={() => goBack()} />
    </Wrapper>
  );
};

export default TimeMode;
