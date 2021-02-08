import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useGlobalContext } from '../../Context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useGlobalContext();

  const sign = transaction.item.amount < 0 ? '-' : '+';

  return (
    <View style={styles.container}>
      <Text>{transaction.item.text}</Text>
      <Text>
        {sign}${Math.abs(transaction.item.amount)}
      </Text>
      <View
        style={[transaction.item.amount < 0 ? styles.minus : styles.plus]}
      ></View>
      <Button
        style={styles.button}
        title='x'
        onPress={() => deleteTransaction(transaction.item.id)}
      />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    backgroundColor: 'lightGrey',
  },
  minus: {
    height: 30,
    width: 10,
    backgroundColor: 'red',
  },
  plus: {
    height: 30,
    width: 10,
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'red',
    height: 30,
    width: 10,
    color: '#9c88ff',
  },
});
