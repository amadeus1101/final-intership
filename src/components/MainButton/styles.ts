import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
  },
  touchable: {
    width: '75%',
    paddingBottom: '2%',
    borderRadius: 10,
    backgroundColor: Colors.red_shadow,
  },
  button: {
    paddingVertical: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.red,
  },
  text: {
    fontSize: TextSize.regular,
    letterSpacing: 1,
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
  },
});
