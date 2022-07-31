import {createSlice} from '@reduxjs/toolkit';
import {Score} from '../models/Score';
const initialState: Score[] = [
  {username: 'David', score: 12},
  {username: 'Dudu', score: 16},
  {username: 'Vova', score: 6},
  {username: 'AVI', score: 1},
  {username: 'Shlomo', score: 7},
  {username: 'SSS', score: 17},
  {username: 'Odedd', score: 11},
  {username: 'Greeg', score: 10},
  {username: 'yyy', score: 5},
  {username: 'GGG', score: 7},
  {username: 'Ivan', score: 13},
];

export const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    add: (state, action) => {
      // if username exists - must only update score
      const existsingUserScore = state.find(
        score => action.payload.username === score.username,
      );
      if (existsingUserScore) {
        existsingUserScore.score = action.payload.score;
        return;
      }
      // usually - just add new score entry
      state.push(action.payload);
    },
  },
});

export const {add} = scoresSlice.actions;

export default scoresSlice.reducer;
