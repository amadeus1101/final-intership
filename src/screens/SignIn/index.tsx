import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import Alert from '../../components/Alert';

const SignIn = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
        <Header>{t('welcome')}</Header>
        <Input content={t('login')} />
        <Input content={t('password')} />
        <MainButton content={t('buttonSignIn')} />
        <Alert
          content={t('returnSignUp')}
          link={t('signUp')}
          callback={() => {}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
