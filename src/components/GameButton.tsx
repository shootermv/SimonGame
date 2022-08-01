import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import { useSelector } from 'react-redux';
import { GameState } from '../store/gameSlice';
const GameButton = ({
  userPressHandler,
  disabled,
  num,
  playingBtn,
}: {
  userPressHandler: Function;
  disabled: boolean;
  num: number;
  playingBtn: number
}) => {

  return (
    <Pressable
      disabled={disabled}
      style={[styles.button, playingBtn === num ? {backgroundColor:'red'} : {}]}
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
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default GameButton;
