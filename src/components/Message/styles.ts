import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.dark_black,
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    borderRadius: 10,
  },
  content: {
    padding: '10%',
  },
  header: {
    color: Colors.grey_light,
    fontFamily: 'Ubuntu-Bold',
    fontSize: TextSize.medium,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
});
