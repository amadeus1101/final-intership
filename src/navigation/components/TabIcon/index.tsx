import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';

type TabIconProps = {
  src: ImageSourcePropType | undefined;
  src_active: ImageSourcePropType | undefined;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({
  src = undefined,
  src_active = undefined,
  focused = false,
}) => {
  return <Image source={focused ? src_active : src} style={styles.image} />;
};

export default TabIcon;
