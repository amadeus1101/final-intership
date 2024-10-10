import React from 'react';
import {Text, Touchable, TouchableHighlight, View} from 'react-native';
import {styles} from './styles';

type AlertProps = {
  content: string;
  link: string;
  callback: () => void;
};

const AuthLink: React.FC<AlertProps> = ({content, link, callback}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content + ' '}</Text>
      <TouchableHighlight onPress={callback}>
        <Text style={[styles.text, styles.link]}>{link}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AuthLink;
