import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    color: Colors.grey_light,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 22,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
