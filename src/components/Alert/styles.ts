import {StyleSheet} from 'react-native';
import {TextSize} from '../../constants/TextSizes';
import {Colors} from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontSize: TextSize.mini,
    color: Colors.grey_light,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
