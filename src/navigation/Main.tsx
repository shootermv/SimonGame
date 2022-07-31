import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from '../screens/Game'
import Scores from '../screens/Scores';

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Scores" component={Scores} />
    </Stack.Navigator>
  );
};

export default Main;