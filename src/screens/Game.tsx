import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import ScoreModal from '../components/ScoreModal';
const Game = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <View style={styles.centeredView}>
      <ScoreModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>
          {gameStarted ? 'Game Started' : 'Start Game'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Game;
