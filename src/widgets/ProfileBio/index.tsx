import React from 'react';
import {Image, Text, View} from 'react-native';
import Subtitle from '../../components/Subtitle';
import Header from '../../components/Header';
import ShadowButton from '../../components/ShadowButton';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

const ProfileBio = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.photo}>{/* <Image /> */}</View>
      <Header>User#12345</Header>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis id
        quae, iure velit quo tenetur repellat molestiae.
      </Subtitle>
      <View style={styles.buttons}>
        <ShadowButton content={t('gameMenuFriend')} event={() => {}} />
      </View>
    </View>
  );
};

export default ProfileBio;
