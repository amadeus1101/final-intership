import React from 'react';
import {Text, View} from 'react-native';
import Subtitle from '../Subtitle';
import ShadowButton from '../ShadowButton';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

type MessageProps = {
  header: string;
  content: string;
};

const Message: React.FC<MessageProps> = ({header, content}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.modal}>
      <View style={styles.content}>
        <Text style={styles.header}>{t(header)}</Text>
        <Subtitle>{t(content)}</Subtitle>
      </View>
      <View style={styles.buttons}>
        <ShadowButton content={t('yes')} event={() => {}} />
        <ShadowButton content={t('no')} event={() => {}} />
      </View>
    </View>
  );
};

export default Message;
