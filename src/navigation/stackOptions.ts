import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '../constants/Colors';

export const stackOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.black_black,
  },
  headerTitleStyle: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 22,
  },
  headerTitleAlign: 'center',
};
