import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const screen_width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  photo: {
    width: screen_width * 0.5,
    height: screen_width * 0.5,
    backgroundColor: Colors.grey_light,
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    borderRadius: 100,
  },
  buttons: {
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
