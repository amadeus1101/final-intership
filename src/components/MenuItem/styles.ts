import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    padding: '7%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.dark_black,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: Colors.grey_dark,
    borderBottomColor: Colors.grey_dark,
  },
  image: {
    marginRight: '5%',
    width: 30,
    height: 30,
  },
});
