import React from 'react';
import {Text, View} from 'react-native';
import Subtitle from '../Subtitle';
import ShadowButton from '../ShadowButton';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import Message from '../Message';

const Modal = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.overlay}>
      <Message
        header="Surrender?"
        content="Lorem assdaf fdfadfad 8th4h f3f9f2f r2fj293f fd32jhf9293fhnwf d2fn29d af f2f df23rfa 3rfwfcwfscscsc"
      />
    </View>
  );
};

export default Modal;
