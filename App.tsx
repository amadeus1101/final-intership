import React from 'react';
import {Home} from './src/screens/Home/Home';
import {SignIn} from './src/screens/SignIn/SignIn';
import SignUp from './src/screens/SignUp';

function App(): React.JSX.Element {
  // const {t, i18n} = useTranslation();

  // const changeLanguage = () => {
  //   if (i18n.language === 'en') {
  //     i18n.changeLanguage('ru');
  //   } else i18n.changeLanguage('en');
  // };
  return <SignUp />;
}

export default App;
