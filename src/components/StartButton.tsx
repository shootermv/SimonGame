import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
const StartButton = ({
  startGame,
  gameStarted,
}: {
  startGame: Function;
  gameStarted: boolean;
}) => {
  return (
    <Pressable
      disabled={gameStarted}
      style={[styles.button, gameStarted ? {} : styles.buttonOpen]}
      onPress={startGame}>
      <Text style={styles.textStyle}>{'Start Game'}</Text>
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
});
export default StartButton;
