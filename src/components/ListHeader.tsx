import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ListHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <View style={styles.left}/>
      <Text style={styles.center}>Last 10 Scores</Text>
      <View style={styles.right}>
        <TouchableOpacity
          style={styles.againBtn}
          onPress={() => navigation.navigate('Game')}>
          <Text style={styles.againBtnTxt}>Play Again?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: 10,
  },
  center: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    flex: 1,
  },
  left: {
    width: 80,
  },
  right: {
    width: 80,
  },
  againBtn: {
    backgroundColor: 'red',
    borderRadius: 5,
  },
  againBtnTxt: {
    paddingVertical: 5,
    color: '#fff',

  },
});
export default ListHeader;
