import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {indev_dark} from '../../assets/img';
import Message from '../../components/Message';
import {styles} from './styles';

const InDev = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={indev_dark} style={styles.background}>
        <Message
          header="We are sorry"
          content="This section will appear soon"
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InDev;
