import React, {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string;
};

const Header = ({children}: Props) => {
  return <Text style={styles.header}>{children}</Text>;
};

export default Header;
