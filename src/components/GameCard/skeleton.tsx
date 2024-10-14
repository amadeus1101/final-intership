import React from 'react';
import {View} from 'react-native';
import {styles_skeleton as styles} from './styles_skeleton';

const GameCardSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.preview}></View>
      <View style={styles.content}>
        <View style={styles.content_header}></View>
        <View style={styles.content_text}></View>
        <View style={styles.content_decals}></View>
      </View>
    </View>
  );
};

export default GameCardSkeleton;
