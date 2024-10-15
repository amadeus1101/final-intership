import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
    paddingVertical: '2%',
    paddingHorizontal: '8%',
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    borderRadius: 5,
    backgroundColor: Colors.dark_black,
  },
  text: {
    color: Colors.grey_light,
    fontSize: TextSize.small,
    fontFamily: 'Ubuntu-Medium',
  },
});
