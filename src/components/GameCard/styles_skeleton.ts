import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';

export const styles_skeleton = StyleSheet.create({
  container: {
    width: '90%',

    marginVertical: 10,
    padding: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: Colors.grey_dark,
    backgroundColor: Colors.dark_black,
  },
  preview: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: Colors.grey_dark,
    backgroundColor: Colors.aquamarine,
  },
  content: {
    justifyContent: 'space-evenly',
  },
  content_header: {
    height: 18,
    width: 180,
    backgroundColor: Colors.grey_dark,
    borderRadius: 5,
  },
  content_text: {
    height: 16,
    width: 180,
    backgroundColor: Colors.grey_dark,
    borderRadius: 5,
  },
  content_decals: {
    height: 30,
    width: 90,
    backgroundColor: Colors.grey_dark,
    borderRadius: 5,
  },
});
