import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';

type InputProps = {
  placeholder: string;
  isSecret: boolean;
  matchInput: (value: string) => boolean;
};

const Input: React.FC<InputProps> = ({placeholder, matchInput, isSecret}) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputInvalid, setInputInvalid] = useState(false);

  const onUseInput = (text: string) => {
    matchInput(text) ? setInputInvalid(false) : setInputInvalid(true);
    setInputValue(text);
  };
  return (
    <View style={styles.container}>
      {isInputInvalid && <Text style={styles.label}>{isInputInvalid}</Text>}
      <TextInput
        keyboardType="visible-password"
        value={inputValue}
        onChangeText={text => onUseInput(text)}
        style={
          isInputInvalid ? [styles.input, styles.inputOutlined] : styles.input
        }
        placeholder={placeholder}
        placeholderTextColor={Colors.grey_dark}
        secureTextEntry={isSecret}
      />
    </View>
  );
};

export default Input;
