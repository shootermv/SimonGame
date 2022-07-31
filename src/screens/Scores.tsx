import React from 'react';
import {Text} from 'react-native';
import { useSelector } from 'react-redux';

const Scores = () => {
  const scores = useSelector(state => state.scores);
  return <Text>Scores{scores.length}</Text>;
}
export default Scores;