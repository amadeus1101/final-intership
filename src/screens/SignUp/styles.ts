import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black_black,
  },
  form: {
    alignItems: 'center',
  },
  link_container: {
    marginTop: 10,
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
