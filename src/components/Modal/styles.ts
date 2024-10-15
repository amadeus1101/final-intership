import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

const screen_width = Dimensions.get('screen').width;
const screen_height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  overlay: {
    width: screen_width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  modal: {
    paddingHorizontal: '5%',
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    borderRadius: 10,
    backgroundColor: Colors.dark_black,
  },
  header: {
    marginVertical: '5%',
    color: Colors.grey_light,
    fontFamily: 'Ubuntu-Bold',
    fontSize: TextSize.medium,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
});
