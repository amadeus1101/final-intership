import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Text, View} from 'react-native';
import Input from '../../components/Input';
import MainButton from '../../components/MainButton';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import Alert from '../../components/Alert';
import {validateInput} from '../../services/validation/validateInput';
import Wrapper from '../../components/Wrapper';

const SignIn = () => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.form}>
          <Header>{t('welcome')}</Header>
          <Input placeholder={t('login')} isSecret={false} />
          <Input placeholder={t('password')} isSecret={false} />
          <MainButton content={t('buttonSignIn')} active onClick={() => {}} />
          <Alert
            content={t('returnSignUp')}
            link={t('signUp')}
            callback={() => {}}
          />
        </KeyboardAvoidingView>
      </View>
    </Wrapper>
  );
};

export default SignIn;
