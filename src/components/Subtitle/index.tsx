import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
};

const Subtitle: React.FC<Props> = ({children}) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

export default Subtitle;
