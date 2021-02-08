import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopNav = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text style={styles.textHeader}>Hi, Awire!</Text>
        <Text style={styles.textSubHeader}>Here's Your Balance</Text>
      </View>
      <View style={styles.balance}>
        <View>
          <Text style={styles.text}>SAVINGS</Text>
          <Text style={styles.text}>$15,615</Text>
        </View>
        <View>
          <Text style={styles.text}>ASSETS</Text>
          <Text style={styles.text}>$9,615</Text>
        </View>
      </View>
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#33404F',
    paddingBottom: 30,
    paddingLeft: 30,
  },

  balance: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
  },
  textHeader: {
    color: 'white',
    fontSize: 40,
    fontWeight: 700,
  },
  textSubHeader: {
    color: 'white',
    marginBottom: 20,
  },
});
