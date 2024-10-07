import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import MainButton from '../../components/MainButton';
import {background_dark, background_light} from '../../assets/img';

const Home = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={background_dark}>
        <MainButton />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
