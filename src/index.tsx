import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Main from './navigation/Main';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Main />
      </NavigationContainer></PersistGate>
    </Provider>
  );
}
