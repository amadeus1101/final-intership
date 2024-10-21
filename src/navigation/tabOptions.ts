import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/Colors';

export const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: Colors.black_black,
  },
  tabBarLabelStyle: {
    color: Colors.grey_light,
  },
};
