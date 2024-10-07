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
  title: {
    marginBottom: '4%',
    padding: '1%',
    fontSize: TextSize.large,
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    borderBottomWidth: 4,
    borderBottomColor: Colors.grey_dark,
  },
});
