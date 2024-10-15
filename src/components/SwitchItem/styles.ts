import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    margin: '2%',
    padding: '2%',
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    borderRadius: 5,
    backgroundColor: Colors.dark_black,
  },
  active: {
    borderColor: Colors.aquamarine,
  },
  background: {
    width: 15,
    height: 30,
  },
});
