import {createSlice} from '@reduxjs/toolkit';
import {generateSequenceNum} from '../utils';
export type GameState = {
  gameStarted: boolean;
  userSequence: string;
  realSequence: string;
  modalVisible: boolean;
  playingBtn: number;
};
export const initialState = {
  gameStarted: false,
  userSequence: '',
  realSequence: '',
  modalVisible: false,
  playingBtn: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameStarted = true;
      const nm = generateSequenceNum();
      state.realSequence = `${nm}`;
    },
    resetGame: () => initialState,
    userClick: (state, action) => {
      state.userSequence += action.payload;
      if (state.userSequence === state.realSequence) {
        state.realSequence += generateSequenceNum();
        state.userSequence = '';
      } else if (
        state.userSequence !==
        state.realSequence.slice(0, state.userSequence.length)
      ) {
        state.modalVisible = true;
      }
    },
  },
});

export const {userClick, resetGame, startGame} = gameSlice.actions;

export default gameSlice.reducer;
