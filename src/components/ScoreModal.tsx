import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GameState, resetGame} from '../store/gameSlice';
import {add} from '../store/scoresSlice';
const ScoreModal = () => {
  const dispatch = useDispatch();
  const {modalVisible, realSequence} = useSelector((state: {game: GameState}) => state.game);

  const [username, setName] = useState('');
  const navigation = useNavigation();
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Score: {realSequence.length}</Text>
          <Text style={styles.modalText}>Please Enter Your Name:</Text>
          <TextInput
            value={username}
            onChangeText={txt => setName(txt)}
            style={styles.Input}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              // validate
              if (!username) {
                return;
              }
              dispatch(add({username, score: realSequence.length}));
              setName('');
              dispatch(resetGame());
              navigation.navigate('Scores');
            }}>
            <Text style={styles.textStyle}>Save Score</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    width: 120,
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ScoreModal;
