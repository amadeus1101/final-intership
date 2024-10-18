import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './styles';

type StackHeaderProps = {
  content: string;
  icon_url: ImageSourcePropType | undefined;
};

const StackHeader: React.FC<StackHeaderProps> = ({
  content,
  icon_url = undefined,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon_url} />
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default StackHeader;
