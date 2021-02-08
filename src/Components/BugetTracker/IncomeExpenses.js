import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useGlobalContext } from '../../Context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useGlobalContext();
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text>INCOME</Text>
          <Text style={styles.income}>${income}</Text>
        </View>
        <View style={styles.header}>
          <Text>EXPENSE</Text>
          <Text style={styles.expense}>${expense}</Text>
        </View>
      </View>
    </View>
  );
};

export default IncomeExpenses;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 50,
  },
  header: {
    gap: 10,
    textAlign: 'center',
  },
  income: {
    color: 'green',
    fontWeight: 500,
  },
  expense: {
    color: 'red',
    fontWeight: 500,
  },
});
