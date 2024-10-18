import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type TabTextProps = {
  content: string;
  focused: boolean;
};

const TabText: React.FC<TabTextProps> = ({content, focused = false}) => {
  return (
    <Text style={focused ? [styles.text, styles.focused] : styles.text}>
      {content}
    </Text>
  );
};

export default TabText;
