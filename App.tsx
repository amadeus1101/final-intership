import React from 'react';
import {Home} from './src/screens/Home/Home';

function App(): React.JSX.Element {
  // const {t, i18n} = useTranslation();

  // const changeLanguage = () => {
  //   if (i18n.language === 'en') {
  //     i18n.changeLanguage('ru');
  //   } else i18n.changeLanguage('en');
  // };
  return <Home />;
}

export default App;
