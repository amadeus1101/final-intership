import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

const screen_width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.black_black,
  },
  preview: {
    width: screen_width * 0.6,
    height: screen_width * 0.6,
    borderWidth: 8,
    borderColor: Colors.grey_dark,
    borderRadius: 5,
    backgroundColor: Colors.grey_light,
  },
  setting: {
    width: '100%',
    marginVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});