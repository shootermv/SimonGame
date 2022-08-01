import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, SOUNDS} from '../constants';

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
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: COLORS[num][disabled ? 'disabled' : 'enabled'],
          borderColor: COLORS[num][disabled ? 'disabled' : 'enabled'],
        },
        playingBtn === num ? {borderColor: 'red', borderWidth: 3} : {},
      ]}
      onPress={() => {
        userPressHandler(num);
        SOUNDS[num].play();
      }}>
      <Text style={styles.textStyle}>{num}</Text>
    </TouchableOpacity>
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
