import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  SimpleLineIcons,
  Ionicons,
  EvilIcons,
} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const Nav = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <AntDesign name='home' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity>
        <SimpleLineIcons name='notebook' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
        <AntDesign name='appstore-o' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='md-notifications-outline' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name='user' size={30} color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#33404F',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 99,
  },
});

export default withNavigation(Nav);
