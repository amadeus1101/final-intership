import React from 'react';
import {Image, SafeAreaView} from 'react-native';
import {splash_icon} from '../../assets/img';
import {styles} from './styles';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={splash_icon} style={styles.logo} />
    </SafeAreaView>
  );
};

export default Splash;
