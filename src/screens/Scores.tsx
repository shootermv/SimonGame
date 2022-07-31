import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Score} from '../models/Score';

const Item = ({item}: {item: Score}) => (
  <Text>
    {item.username}: {item.score}
  </Text>
);
const renderItem = ({item}: {item: Score}) => {
  return <Item item={item} />;
};
const Scores = () => {
  const scores = useSelector((state: {scores: Score[]}) => state.scores);
  return (
    <FlatList
      data={scores}
      renderItem={renderItem}
      keyExtractor={item => item.username}
    />
  );
};
const styles = StyleSheet.create({});
export default Scores;
