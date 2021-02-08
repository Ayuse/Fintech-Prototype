import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGlobalContext } from '../../Context/GlobalState';

const Balance = () => {
  const { transactions } = useGlobalContext();
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <View>
      <Text>Your Balance</Text>
      <Text>${total}</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});
