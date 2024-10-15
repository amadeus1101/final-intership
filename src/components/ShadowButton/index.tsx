import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../constants/Colors';
import {useTranslation} from 'react-i18next';

type ShadowButtonProps = {
  content: string;
  event: () => void;
};

const ShadowButton: React.FC<ShadowButtonProps> = ({content, event}) => {
  const {t} = useTranslation();
  return (
    <TouchableHighlight style={styles.button} onPress={event}>
      <Text style={styles.text}>{t(content)}</Text>
    </TouchableHighlight>
  );
};

export default ShadowButton;
