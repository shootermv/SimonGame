import { configureStore } from '@reduxjs/toolkit';
import scoresReducer from './scoresSlice';
import gameReducer from './gameSlice';
export const store = configureStore({
  reducer: {
    scores: scoresReducer,
    game: gameReducer,
  },
})
