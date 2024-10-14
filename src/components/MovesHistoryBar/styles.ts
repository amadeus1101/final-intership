import {StyleSheet} from 'react-native';
import {TextSize} from '../../constants/TextSizes';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  list: {
    width: '100%',
    padding: '3%',
    backgroundColor: Colors.dark_black,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.grey_dark,
  },
  container: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: TextSize.mini,
    fontFamily: 'Ubuntu-Regular',
  },
  white: {
    color: Colors.grey_light,
  },
  black: {
    color: Colors.grey_dark,
  },
});
