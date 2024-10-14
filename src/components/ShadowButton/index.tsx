import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';

const ShadowButton = () => {
  return (
    <TouchableHighlight style={styles.button} onPress={() => {}}>
      <Text style={styles.text}>Friend</Text>
    </TouchableHighlight>
  );
};

export default ShadowButton;
