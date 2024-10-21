import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Title from '../Title';
import Subtitle from '../Subtitle';

type GameCardProps = {
  title: string;
  subtitle: string;
  league: string;
  image: ImageSourcePropType | undefined;
  league_icon: ImageSourcePropType | undefined;
  onClick: () => void;
};

const GameCard: React.FC<GameCardProps> = ({
  title,
  subtitle,
  league,
  image = undefined,
  league_icon = undefined,
  onClick,
}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onClick}>
      <View style={styles.preview}>
        <Image source={image} />
      </View>
      <View style={styles.content}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <View style={styles.rating}>
          <View style={styles.rating_icon}>
            <Image source={league_icon} />
          </View>
          <Text style={styles.rating_content}>{league}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
