import React from 'react';
import Wrapper from '../../components/Wrapper';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/RootNavigator';
import MenuItem from '../../components/MenuItem';
import {
  amethist_league_icon,
  board_icon,
  bronze_league_icon,
  emerald_league_icon,
  eye_icon,
  gold_league_icon,
  ruby_league_icon,
  saphire_league_icon,
  silver_league_icon,
  user_icon,
} from '../../assets/img';
import {styles} from './styles';

const Options = () => {
  return (
    <ScrollView style={styles.container}>
      <MenuItem image={gold_league_icon} onPress={() => navigate('Rating')}>
        Rating
      </MenuItem>
      <MenuItem image={user_icon} onPress={() => navigate('Profile')}>
        Profile
      </MenuItem>
      <MenuItem image={eye_icon} onPress={() => {}}>
        Watch Game
      </MenuItem>
      <MenuItem image={board_icon} onPress={() => {}}>
        Themes
      </MenuItem>
      <MenuItem image={bronze_league_icon} onPress={() => {}}>
        Menu #1
      </MenuItem>
      <MenuItem image={silver_league_icon} onPress={() => {}}>
        Menu #2
      </MenuItem>
      <MenuItem image={gold_league_icon} onPress={() => {}}>
        Menu #3
      </MenuItem>
      <MenuItem image={saphire_league_icon} onPress={() => {}}>
        Menu #4
      </MenuItem>
      <MenuItem image={ruby_league_icon} onPress={() => {}}>
        Menu #5
      </MenuItem>
      <MenuItem image={amethist_league_icon} onPress={() => {}}>
        Menu #6
      </MenuItem>
      <MenuItem image={emerald_league_icon} onPress={() => {}}>
        Menu #7
      </MenuItem>
    </ScrollView>
  );
};

export default Options;
