import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type HeaderButtonProps = {
  source: ImageSourcePropType | undefined;
  onClick: () => void;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  onClick,
  source = undefined,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image source={source} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderButton;
