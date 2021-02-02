import React from 'react';

import { StyleSheet, View } from 'react-native';
import Nav from '../Components/Nav';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
