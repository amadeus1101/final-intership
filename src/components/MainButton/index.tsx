import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';
import {InsideTextType} from '../../types/InsideTextType';

const MainButton: React.FC<InsideTextType> = ({content}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        activeOpacity={0.3}
        underlayColor={Colors.red_shadow}
        onPress={() => {}}>
        <View style={styles.button}>
          <Text style={styles.text}>{content}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default MainButton;
