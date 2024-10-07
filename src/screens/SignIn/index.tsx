import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const SignIn = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
        <Text style={styles.title}>{t('welcome')}</Text>
        <Input content={t('login')} />
        <Input content={t('password')} />
        <MainButton content={t('buttonSignIn')} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
