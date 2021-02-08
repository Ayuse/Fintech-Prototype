import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  AddTransaction,
  Balance,
  Transaction,
  TransactionList,
  IncomeExpenses,
} from '../Components/BugetTracker';
import Nav from '../Components/Nav';

const BudgetScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.header}>Awire</Text>
        <Balance />
        <IncomeExpenses style={styles.expense} />
        <TransactionList />
        <AddTransaction />
      </View>
      <Nav />
    </View>
  );
};

export default BudgetScreen;

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flex: 1,
    gap: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: 700,
  },
});
