import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',

    alignItems: 'center',
    paddingVertical: '3%',
  },
  input: {
    position: 'relative',
    width: '90%',
    paddingVertical: '3%',
    paddingHorizontal: '4%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.grey_dark,
    color: Colors.grey_light,
    fontSize: TextSize.small,
    fontFamily: 'Ubuntu-Regular',
    backgroundColor: Colors.dark_black,
  },
  inputOutlined: {
    borderColor: Colors.red,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 10,
    color: Colors.red,
    fontSize: TextSize.mini,
    fontFamily: 'Ubuntu-Regular',
  },
});
