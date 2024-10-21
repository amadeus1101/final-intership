import React from 'react';
import Wrapper from '../../components/Wrapper';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OptionsStackParamList} from '../../navigation/AppTabRoutes/OptionsStackNavigator';

type Props = NativeStackScreenProps<OptionsStackParamList, 'Options'>;

const Options = ({navigation, route}: Props) => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
        <Text>Rating</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Options;
