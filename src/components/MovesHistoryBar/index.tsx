import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';

const MovesHistoryBar = () => {
  return (
    <View style={{width: '100%'}}>
      <FlatList
        horizontal={true}
        style={styles.list}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text
              style={[
                styles.text,
                item % 2 === 0 ? styles.white : styles.black,
              ]}>
              {item + '. Rg6'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default MovesHistoryBar;
