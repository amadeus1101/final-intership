import React, {useEffect} from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  // useEffect(() => {
  //   const initializeFirebase = async () => {
  //     console.log('firebase initialized');

  //     await firestore.
  //   }

  // }, [])
  return <RootNavigator />;
};

export default App;
