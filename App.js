import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen';
import BudgetScreen from './src/Screens/BudgetScreen';
import { GlobalProvider } from './src/Context/GlobalState';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Budget: BudgetScreen,
  },
  {
    initialRouteName: 'Budget',
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};
