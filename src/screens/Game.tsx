import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import GameButton from '../components/GameButton';
import ScoreModal from '../components/ScoreModal';
import StartButton from '../components/StartButton';
import {GameState, startGame, userClick} from '../store/gameSlice';
import Sound from 'react-native-sound';
import {SOUNDS} from '../constants';

Sound.setCategory('Playback');
const Game = () => {
  const dispatch = useDispatch();
  const [playingBtn, setPlayngBtn] = useState(0);
  const {gameStarted, realSequence} = useSelector(
    (state: {game: GameState}) => state.game,
  );
  const playSequence = () => {
    const arr = realSequence.split('');
    let interval = setInterval(() => {
      let num = arr.shift();
      if (!num) {
        clearInterval(interval);
        setPlayngBtn(0);
      } else {
        setPlayngBtn(5); // num 5 is none of the buttons but is still playing

        setTimeout(() => {
          //SOUNDS[Number(num)].play();
          //setTimeout(() => {SOUNDS[Number(num)].release()}, 500)
          setPlayngBtn(Number(num));
        }, 100);
      }
    }, 700);
  };
  useEffect(() => {
    if (realSequence) {
      playSequence();
    }
  }, [realSequence]);
  const userPressHandler = (num: number) => {
    dispatch(userClick(num));
  };
  return (
    <View style={styles.centeredView}>
      <ScoreModal />
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStarted || !!playingBtn}
          num={1}
          playingBtn={playingBtn}
        />
      </View>
      <View style={styles.startWrap}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStarted || !!playingBtn}
          num={2}
          playingBtn={playingBtn}
        />
        <StartButton
          gameStarted={gameStarted}
          startGame={() => dispatch(startGame())}
        />
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStarted || !!playingBtn}
          num={4}
          playingBtn={playingBtn}
        />
      </View>
      <View style={styles.center}>
        <GameButton
          userPressHandler={userPressHandler}
          disabled={!gameStarted || !!playingBtn}
          num={3}
          playingBtn={playingBtn}
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
