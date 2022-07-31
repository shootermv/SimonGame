import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import GameButton from '../components/GameButton';
import ScoreModal from '../components/ScoreModal';
import StartButton from '../components/StartButton';
import {generateSequenceNum} from '../utils';

const Game = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [userSequence, setUserSequence] = useState('');
  const [realSequence, setRealSequence] = useState('');
  const compareSequences = (user: string, real: string) => {
    console.log('comparing.....');
    if (user === real.slice(0, user.length)) {
      console.log('RIGHT:', user, real.slice(0, user.length));
      if (user.length === real.length) {
        setUserSequence(() => {
          setScore(score + 1);
          return '';// empty user sequence after success
        });
      }
    } else {
      // some charater is worng
      console.log('WRONG!', user, real.slice(0, user.length));
      setModalVisible(true);
    }
  };
  useEffect(() => {
    if (score) {
      const nm = generateSequenceNum(score);
      setRealSequence(() => {
        console.log('------');
        console.log('generated:', `${realSequence}${nm}`);
        return `${realSequence}${nm}`;
      });
    }
  }, [score]);
  useEffect(() => {
    if (userSequence.length && realSequence.length && score) {
      compareSequences(userSequence, realSequence);
    }
  }, [userSequence, realSequence, score]);
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
      setScore(0);
      setUserSequence('');
      setRealSequence('');
    }, []),
  );
  return (
    <View style={styles.centeredView}>
      <ScoreModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        score={score}
      />
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!score}
          num={1}
        />
      </View>
      <View style={styles.startWrap}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!score}
          num={2}
        />
        <StartButton
          gameStarted={!!score}
          startGame={() => setScore(1)}/>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!score}
          num={4}
        />
      </View>
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!score}
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
