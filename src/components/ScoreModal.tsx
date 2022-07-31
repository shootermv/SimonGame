import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
const ScoreModal = ({
  setModalVisible,
  modalVisible,
}: {
  setModalVisible: Function;
  modalVisible: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Wrong!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
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
