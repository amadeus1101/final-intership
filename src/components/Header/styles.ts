import {StyleSheet} from 'react-native';
import {TextSize} from '../../constants/TextSizes';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  header: {
    marginBottom: '4%',
    padding: '1%',
    fontSize: TextSize.large,
    color: Colors.white,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
