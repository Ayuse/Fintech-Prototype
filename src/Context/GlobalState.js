import React, { useContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: 'awire',
      amount: 3,
    },
    {
      id: 2,
      text: 'cjjwire',
      amount: -3,
    },
    {
      id: 1,
      text: 'awire',
      amount: 3,
    },
    {
      id: 2,
      text: 'cjjwire',
      amount: -3,
    },
    {
      id: 1,
      text: 'awire',
      amount: 3,
    },
    {
      id: 2,
      text: 'cjjwire',
      amount: -3,
    },
  ],
};

// Create context
export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
