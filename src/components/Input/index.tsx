import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';

type InputProps = {
  placeholder: string;
  isSecret: boolean;
};

const Input: React.FC<InputProps> = ({placeholder}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      {<Text style={styles.label}>Use only A-Z and 0-9 and less than 10</Text>}
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey_dark}
      />
    </View>
  );
};

export default Input;
