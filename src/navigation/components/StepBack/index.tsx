import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {arrow_icon} from '../../../assets/img';

type StepBackProps = {
  onClick: () => void;
};

const StepBack: React.FC<StepBackProps> = ({onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <Image source={arrow_icon} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StepBack;
