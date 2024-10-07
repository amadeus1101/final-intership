import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';
import {InsideTextType} from '../../types/InsideTextType';
import {Colors} from '../../constants/Colors';

const Input: React.FC<InsideTextType> = ({content}) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="visible-password"
        style={styles.input}
        placeholder={content}
        placeholderTextColor={Colors.grey_dark}
      />
    </View>
  );
};

export default Input;
