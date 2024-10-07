import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: '3%',
  },
  input: {
    width: '90%',
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: Colors.grey_dark,
    color: Colors.grey_light,
    fontSize: TextSize.small,
    fontFamily: 'Ubuntu-Regular',
    backgroundColor: Colors.dark_black,
  },
});
