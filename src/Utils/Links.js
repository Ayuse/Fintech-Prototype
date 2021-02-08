import React from 'react';

import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export const Activities = [
  {
    id: 1,
    name: 'Account',
    image: '',
  },
  {
    id: 2,
    name: 'Privacy',
    image: '',
  },
  {
    id: 3,
    name: 'Help',
    image: '',
  },
];

export const Transactions = [
  {
    id: 1,
    name: 'Food & Beverage',
    sub: 'Pizza Hut',
    image: <Ionicons name='fast-food-outline' size={24} color='black' />,
    amt: '+155.22',
    date: 'Feb 14',
  },
  {
    id: 2,
    name: 'Shopping',
    sub: 'Shoprite',
    image: <AntDesign name='shoppingcart' size={24} color='black' />,
    amt: '-28.11',
    date: 'July 23',
  },
  {
    id: 3,
    name: 'Clothing',
    sub: 'Zara Fashion',
    image: <AntDesign name='shoppingcart' size={24} color='black' />,
    amt: '+155.22',
    date: 'Feb 14',
  },
  {
    id: 4,
    name: 'Gadget',
    sub: 'Apple Store',
    image: <AntDesign name='apple-o' size={24} color='black' />,
    amt: '-28.11',
    date: 'July 23',
  },
  {
    id: 5,
    name: 'Movies',
    sub: 'Universal Studio',
    image: (
      <MaterialCommunityIcons name='movie-outline' size={24} color='black' />
    ),
    amt: '+155.22',
    date: 'Feb 14',
  },
  {
    id: 6,
    name: 'Gaming',
    sub: 'EA Sports',
    image: (
      <Ionicons name='ios-game-controller-outline' size={24} color='black' />
    ),
    amt: '-28.11',
    date: 'July 23',
  },
];
