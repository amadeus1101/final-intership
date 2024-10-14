import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>10:00</Text>
    </View>
  );
};

export default Timer;
