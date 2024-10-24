import firestore from '@react-native-firebase/firestore';

export const getUsers = async () => {
  const usersCollection = await firestore().collection('users').get();
  const users = usersCollection.docs.map(doc => doc.data());
  console.log('Users: ', users);
};
