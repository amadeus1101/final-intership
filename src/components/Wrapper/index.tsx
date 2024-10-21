import React, {ReactNode} from 'react';
import {
  Alert,
  ImageBackground,
  ImageSourcePropType,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Wrapper;
