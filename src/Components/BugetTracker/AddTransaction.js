import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useGlobalContext } from '../../Context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useGlobalContext();

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const Submit = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        type='outlined'
        label='Enter text...'
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text>Amount</Text>
      <Text>(negative-expense, positive-income)</Text>
      <TextInput
        style={styles.input}
        type='outlined'
        label='0'
        value={amount}
        keyboardType='numeric'
        onChangeText={(amount) => setAmount(amount)}
      />
      <Button title='Add Transaction' onPress={() => Submit()} />
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  wrapper: {
    gap: 10,
  },
  input: {
    height: 20,
  },
});
