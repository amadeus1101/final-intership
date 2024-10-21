import React from 'react';
import MainButton from '../../components/MainButton';
import {useTranslation} from 'react-i18next';
import Wrapper from '../../components/Wrapper';
import {FlatList} from 'react-native';
import {styles} from './styles';
import GameCard from '../../components/GameCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigator';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({navigation, route}: Props) => {
  const {t} = useTranslation();
  return (
    <Wrapper>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        contentContainerStyle={styles.list}
        renderItem={({item}) => (
          <GameCard
            title="Game #1"
            subtitle="Bla bla blafghj asdad ad"
            league="silver"
            onClick={() => navigation.navigate('Game')}
            image={undefined}
            league_icon={undefined}
          />
        )}
        keyExtractor={num => num.toString()}
      />
      <MainButton
        content={t('buttonPlay')}
        active={true}
        onClick={() => navigation.navigate('GameMode')}
      />
    </Wrapper>

    // <SafeAreaView style={styles.container}>
    //   <ImageBackground source={background_dark} style={styles.background}>
    //     <GameCardList />
    //     <MainButton
    //       content={t('buttonPlay')}
    //       active={true}
    //       onClick={() => {}}
    //     />
    //   </ImageBackground>
    // </SafeAreaView>
  );
};

export default Home;
