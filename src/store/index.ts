import {combineReducers, configureStore} from '@reduxjs/toolkit';
import scoresReducer from './scoresSlice';
import gameReducer from './gameSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


const rootReducer = combineReducers({
  scores: scoresReducer,
  game: gameReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store)