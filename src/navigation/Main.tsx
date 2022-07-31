import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Game = () => {
  return <Text>Game</Text>;
}
const Scores = () => {
  return <Text>Scores</Text>;
}
const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Scores" component={Scores} />
    </Stack.Navigator>
  );
};

export default Main;