import React from 'react';
import Wrapper from '../../components/Wrapper';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import Subtitle from '../../components/Subtitle';
import ShadowButton from '../../components/ShadowButton';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import Title from '../../components/Title';
import GameCardMini from '../../components/GameCardMini';

const Profile = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <ScrollView>
        {/* BIO */}
        <View style={styles.container}>
          <View style={styles.photo}>{/* <Image /> */}</View>
          <Header>User#12345</Header>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            id quae, iure velit quo tenetur repellat molestiae.
          </Subtitle>
          <View style={styles.buttons}>
            <ShadowButton content={t('gameMenuFriend')} event={() => {}} />
          </View>
        </View>
        {/* Game Archive */}
        <View>
          <Title>{t('lastGames')}</Title>
          <GameCardMini />
          <GameCardMini />
          <GameCardMini />
          <ShadowButton content={t('showmore')} event={() => {}} />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;
