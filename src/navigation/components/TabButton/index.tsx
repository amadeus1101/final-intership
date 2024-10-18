import React from 'react';
import {Text, View, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';

type TabButtonProps = {
  focused: boolean;
  content: string;
  icon: ImageSourcePropType | undefined;
};

const TabButton: React.FC<TabButtonProps> = ({
  content,
  icon = undefined,
  focused = false,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default TabButton;
