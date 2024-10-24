import auth from '@react-native-firebase/auth';

//reg
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    return false;
  }
};

//login
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    console.log(userCredential.user.uid);
    return userCredential.user.uid;
  } catch (error) {
    console.error('Error during sign in:', error);
    return false;
  }
};
