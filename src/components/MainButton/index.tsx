import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';

const MainButton = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        activeOpacity={0.3}
        underlayColor={Colors.red_shadow}
        onPress={() => {}}>
        <View style={styles.button}>
          <Text style={styles.text}>{t('buttonPlay')}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default MainButton;
