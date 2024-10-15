import React, {useState} from 'react';
import {View} from 'react-native';
import SwitchItem from '../../components/SwitchItem';
import {styles} from './styles';

type SwitcherProps = {
  items: string[];
  activeId: number;
  mode: 'text' | 'background';
};

const Switcher: React.FC<SwitcherProps> = ({items, activeId, mode}) => {
  const [activeSwitch, setActiveSwitch] = useState(activeId);
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <SwitchItem
          id={index}
          mode={mode}
          children={item}
          isActive={index === activeSwitch}
          setActive={setActiveSwitch}
        />
      ))}
    </View>
  );
};

export default Switcher;
