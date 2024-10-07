import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Colors';
import {TextSize} from '../../constants/TextSizes';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
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
  title: {
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
    fontSize: TextSize.small,
  },
  subtitle: {
    color: Colors.grey_light,
    fontFamily: 'Ubuntu-Regular',
    fontSize: TextSize.mini,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating_icon: {
    width: 30,
    height: 30,
    backgroundColor: Colors.grey_light,
  },
  rating_content: {
    marginLeft: 10,
    color: Colors.white,
    fontFamily: 'Ubuntu-Medium',
    fontSize: TextSize.mini,
  },
});
