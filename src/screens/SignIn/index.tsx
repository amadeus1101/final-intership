import React, {useState} from 'react';
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
import {useInput} from '../../hooks/useInput';

const SignIn = () => {
  const {t} = useTranslation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  //'testuser@example.com', 'qwerty12345'
  return (
    <Wrapper>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.form}>
          <Header>{t('welcome')}</Header>
          <Input
            placeholder={t('login')}
            isSecret={false}
            inputValue={login}
            setInputValue={setLogin}
          />
          <Input
            placeholder={t('password')}
            isSecret={false}
            inputValue={password}
            setInputValue={setPassword}
          />
          <MainButton
            content={t('buttonSignIn')}
            active={true}
            onClick={() => Auth.signIn(login, password)}
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
