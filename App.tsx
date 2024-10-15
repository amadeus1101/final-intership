import React from 'react';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Game from './src/screens/Game';
import GameManager from './src/screens/GameManager';

function App(): React.JSX.Element {
  // const {t, i18n} = useTranslation();

  // const changeLanguage = () => {
  //   if (i18n.language === 'en') {
  //     i18n.changeLanguage('ru');
  //   } else i18n.changeLanguage('en');
  // };
  return <GameManager />;
}

export default App;
