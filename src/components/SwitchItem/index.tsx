import React, {Dispatch, SetStateAction, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './styles';
import Title from '../Title';

type Props = {
  id: number;
  mode: 'text' | 'background';
  children: string;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<number>>;
};

const SwitchItem: React.FC<Props> = ({
  id,
  mode,
  children,
  isActive,
  setActive,
}) => {
  if (mode === 'background') {
    const bgArr = children.split('; ');
    return (
      <TouchableWithoutFeedback onPress={() => setActive(id)}>
        <View
          style={
            isActive ? [styles.container, styles.active] : styles.container
          }>
          <View style={[styles.background, {backgroundColor: bgArr[0]}]}></View>
          <View style={[styles.background, {backgroundColor: bgArr[1]}]}></View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Title>{children}</Title>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SwitchItem;
