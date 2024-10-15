import React from 'react';
import {Text, View} from 'react-native';
import Subtitle from '../Subtitle';
import ShadowButton from '../ShadowButton';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

const Modal = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.header}>Surrender</Text>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ea
          repellendus? Ullam, rerum. Iure aut, eaque optio nam iste odio quaerat
          doloribus id officia aspernatur quia est eius blanditiis. Optio!
        </Subtitle>
        <View style={styles.buttons}>
          <ShadowButton content={t('yes')} event={() => {}} />
          <ShadowButton content={t('no')} event={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default Modal;
