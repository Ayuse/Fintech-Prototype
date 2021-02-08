import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Transactions } from '../Utils/Links';

const Hero = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Transactions</Text>
      <FlatList
        style={styles.listContainer}
        Vertical
        data={Transactions}
        keyExtractor={(transaction) => transaction.id}
        renderItem={(transaction) => {
          return (
            <View style={styles.wrapper}>
              <View>{transaction.item.image}</View>
              <View style={styles.text}>
                <Text style={styles.itemHeader}>{transaction.item.name}</Text>
                <Text style={styles.itemSub}>{transaction.item.sub}</Text>
              </View>
              <View style={styles.date}>
                <Text style={styles.itemAmt}>{transaction.item.amt}</Text>
                <Text style={styles.itemDate}>{transaction.item.date}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    position: 'absolute',
    top: 150,
    left: 0,
    right: 0,
    marginleft: 10,
  },
  textHeader: {
    color: '#33404F',
    fontWeight: 900,
    fontSize: 20,
    marginRight: 20,
    marginTop: 30,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    marginRight: 60,
  },
  date: {
    flexDirection: 'column',
    position: 'absolute',
    right: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  itemHeader: {
    color: '#33404F',
    fontWeight: 650,
  },
  itemSub: {
    fontSize: 10,
  },
  itemDate: {
    fontSize: 10,
  },
  itemAmt: {
    fontWeight: 550,
    fontSize: 15,
  },
});
