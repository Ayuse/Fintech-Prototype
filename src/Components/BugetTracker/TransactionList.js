import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useGlobalContext } from '../../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useGlobalContext();
  return (
    <View style={styles.container}>
      <Text>History</Text>
      <FlatList
        style={styles.listContainer}
        Vertical
        data={transactions}
        keyExtractor={(transaction) => transaction.id}
        renderItem={(transaction) => {
          return <Transaction transaction={transaction} />;
        }}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  listContainer: {
    maxHeight: 100,
  },
});
