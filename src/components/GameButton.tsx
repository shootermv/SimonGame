import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
const COLORS = {
  1: {disabled: '#f1eb9c', enabled: '#F4EA56'},
  2: {disabled: '#AABAF2', enabled: 'blue'},
  3: {disabled: '#006269', enabled: '#08ff08'},
  4: {disabled: '#b1a2ca', enabled: '#2e1a47'},
};
const GameButton = ({
  userPressHandler,
  disabled,
  num,
  playingBtn,
}: {
  userPressHandler: Function;
  disabled: boolean;
  num: number;
  playingBtn: number;
}) => {
  
  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: COLORS[num][disabled ? 'disabled' : 'enabled'],
          borderColor: COLORS[num][disabled ? 'disabled' : 'enabled'],
        },
        playingBtn === num ? {borderColor: 'red', borderWidth: 3} : {},
      ]}
      onPress={() => userPressHandler(num)}>
      <Text style={styles.textStyle}>{num}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    borderWidth: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default GameButton;
