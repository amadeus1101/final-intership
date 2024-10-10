import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';

type MainButtonProps = {
  content: string;
  active: boolean;
  onClick: () => void;
};

const MainButton: React.FC<MainButtonProps> = ({content, active, onClick}) => {
  return active ? (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        activeOpacity={0.3}
        underlayColor={Colors.red_shadow}
        onPress={onClick}>
        <View style={styles.button}>
          <Text style={styles.text}>{content}</Text>
        </View>
      </TouchableHighlight>
    </View>
  ) : (
    <View style={[styles.container, {opacity: 0.3}]}>
      <View style={styles.touchable}>
        <View style={styles.button}>
          <Text style={styles.text}>{content}</Text>
        </View>
      </View>
    </View>
  );
};

export default MainButton;
