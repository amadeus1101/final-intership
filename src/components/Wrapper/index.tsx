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
  backgroundImage?: ImageSourcePropType | undefined;
};

const Wrapper: React.FC<Props> = ({children, backgroundImage = undefined}) => {
  if (backgroundImage)
    return (
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground source={backgroundImage} style={styles.container}>
          {children}
        </ImageBackground>
      </SafeAreaView>
    );
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Wrapper;
