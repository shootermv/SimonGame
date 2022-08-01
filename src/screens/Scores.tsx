import React from 'react';
import {Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ListHeader from '../components/ListHeader';
import {Score} from '../models/Score';

const Item = ({item}: {item: Score}) => (
  <Text style={styles.item}>
    {item.username}: {item.score}
  </Text>
);
const renderItem = ({item}: {item: Score}) => {
  return <Item item={item} />;
};
const Scores = () => {
  const scores = useSelector((state: {scores: Score[]}) =>[...state.scores].sort((a, b) => a.score > b.score ).slice(0, 10));
  return (
    <FlatList
      ListHeaderComponent={<ListHeader/>}
      data={scores}
      renderItem={renderItem}
      keyExtractor={item => item.username}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    textAlign: 'center'
  }
});
export default Scores;
