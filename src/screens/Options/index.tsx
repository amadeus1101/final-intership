import React from 'react';
import Wrapper from '../../components/Wrapper';
import {Text, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/RootNavigator';

const Options = () => {
  return (
    <Wrapper>
      <TouchableOpacity onPress={() => navigate('Profile')}>
        <Text>Profileee</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Rating')}>
        <Text>Rating</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Options;
