import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const SignUp = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
        <Text style={styles.title}>{t('welcome')}</Text>
        <Input content={t('login')} />
        <Input content={t('password')} />
        <Input content={t('repeat password')} />
        <MainButton content={t('buttonSignUp')} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
