import React from 'react';

import { StyleSheet, View } from 'react-native';
import Nav from '../Components/Nav';
import TopNav from '../Components/TopNav';
import Hero from '../Components/Hero';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Nav style={styles.nav} />
      <TopNav style={styles.hero} />
      <Hero />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    zIndex: 2,
  },
  nav: {
    zIndex: 4,
  },
});
