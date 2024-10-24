import React, {useState} from 'react';
import {
  Alert,
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
import {navigate} from '../../services/navigator/Navigator';

const SignUp = () => {
  const {t} = useTranslation();

  const onClickCreate = () => {
    Alert.alert('Account has been created');
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        {/* <KeyboardAvoidingView style={styles.form}>
          <Header>{t('welcome')}</Header>
          <Input isSecret={true} placeholder={t('login')} />
          <Input isSecret={true} placeholder={t('password')} />
          <Input isSecret={true} placeholder={t('repeat password')} />
          <MainButton
            content={t('buttonSignUp')}
            active={true}
            onClick={onClickCreate}
          />
          <View style={styles.link_container}>
            <Text style={styles.text}>Or back to </Text>
            <TouchableHighlight onPress={() => navigate('SignIn')}>
              <Text style={[styles.text, styles.link]}>Sign In</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView> */}
      </View>
    </Wrapper>
  );
};

export default SignUp;
