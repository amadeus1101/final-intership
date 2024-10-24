import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Auth from '../../services/firebase/Auth';
import {navigate} from '../../services/navigator/Navigator';

const SignIn = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.form}>
          <Header>{t('welcome')}</Header>
          <Input placeholder={t('login')} isSecret={false} />
          <Input placeholder={t('password')} isSecret={false} />
          <MainButton
            content={t('buttonSignIn')}
            active={true}
            onClick={() => Auth.signIn('testuser@example.com', 'qwerty12345')}
          />
          <View style={styles.link_container}>
            <Text style={styles.text}>New to native chess? Click to </Text>
            <TouchableHighlight onPress={() => navigate('SignUp')}>
              <Text style={[styles.text, styles.link]}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};

export default SignIn;
