import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
const GameButton = ({
  userPressHandler,
  disabled,
  num,
}: {
  userPressHandler: Function;
  disabled: boolean;
  num: number;
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={styles.button}
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
