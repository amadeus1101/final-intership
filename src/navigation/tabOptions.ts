import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/Colors';

export const tabOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.black_black,
  },
  headerTitleStyle: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 22,
  },
  headerTitleAlign: 'center',
  tabBarStyle: {
    backgroundColor: Colors.black_black,
  },
  tabBarLabelStyle: {
    color: Colors.grey_light,
  },
};
