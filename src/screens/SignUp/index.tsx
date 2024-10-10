import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import Alert from '../../components/Alert';
import {validateLogin} from '../../services/validation/validateLogin';
import {validatePassword} from '../../services/validation/validatePassword';
import {validateInput} from '../../services/validation/validateInput';

const SignUp = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.form}>
        <Header>{t('welcome')}</Header>
        <Input
          placeholder={t('login')}
          matchInput={validateInput}
          isSecret={false}
        />
        <Input
          placeholder={t('password')}
          matchInput={validateInput}
          isSecret={true}
        />
        <Input
          placeholder={t('repeat password')}
          matchInput={validateInput}
          isSecret={true}
        />
        <MainButton content={t('buttonSignUp')} />
        <Alert
          content={t('returnSignIn')}
          link={t('signIn')}
          callback={() => {}}></Alert>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
