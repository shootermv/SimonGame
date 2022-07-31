import {createSlice} from '@reduxjs/toolkit';
import {Score} from '../models/Score'
const initialState: Score[] = [{username: 'David', score: 12}];

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
