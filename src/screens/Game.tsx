import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import GameButton from '../components/GameButton';
import ScoreModal from '../components/ScoreModal';
import StartButton from '../components/StartButton';
import {generateSequenceNum} from '../utils';

const Game = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gameStep, setGameStep] = useState(0);
  const [userSequence, setUserSequence] = useState('');
  const [realSequence, setRealSequence] = useState('');
  const compareSequences = (user: string, real: string) => {
    console.log('comparing.....');
    if (user === real.slice(0, user.length)) {
      console.log('RIGHT:', user, real.slice(0, user.length));
      if (user.length === real.length) {
        setUserSequence(() => {
          setGameStep(gameStep + 1);
          return '';
        });
      }
    } else {
      // some charater is worng
      console.log('WRONG!', user, real.slice(0, user.length));
      setModalVisible(true);
    }
  };
  useEffect(() => {
    if (gameStep) {
      const nm = generateSequenceNum(gameStep);
      setRealSequence(() => {
        console.log('------');
        console.log('generated:', `${realSequence}${nm}`);
        return `${realSequence}${nm}`;
      });
    }
  }, [gameStep]);
  useEffect(() => {
    if (userSequence.length && realSequence.length && gameStep) {
      compareSequences(userSequence, realSequence);
    }
  }, [userSequence, realSequence, gameStep]);
  const userPressHandler = useCallback(
    (num: number) => {
      setUserSequence(`${userSequence}${num}`);
    },
    [userSequence],
  );

  useFocusEffect(
    useCallback(() => {
      // when accessnig screen must reset all the state properties
      console.log('RESETING - ', userSequence, realSequence);
      setGameStep(0);
      setUserSequence('');
      setRealSequence('');
    }, []),
  );
  return (
    <View style={styles.centeredView}>
      <ScoreModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStep}
          num={1}
        />
      </View>
      <View style={styles.startWrap}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStep}
          num={2}
        />
        <StartButton
          gameStarted={!!gameStep}
          startGame={() => setGameStep(1)}/>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStep}
          num={4}
        />
      </View>
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStep}
          num={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
  center: {
    justifyContent: 'center',
  },
  startWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Game;
