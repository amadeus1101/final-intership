import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

function App(): React.JSX.Element {
  const {t, i18n} = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ru');
    } else i18n.changeLanguage('en');
  };
  return (
    <SafeAreaView>
      <Text>{t('word1')}</Text>
      <TouchableOpacity onPress={changeLanguage}>
        <Text>{t('word2')}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
