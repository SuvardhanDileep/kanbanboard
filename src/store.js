import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './Redux/DataReducer';

const preloadedState = {
  SelectDataReducer: {
    selectedData: JSON.parse(localStorage.getItem('selectedData')) || [],
    user: JSON.parse(localStorage.getItem('user')) || null,
  },
};

const store = configureStore({
  reducer: {
    DataReducer,
    SelectDataReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('selectedData', JSON.stringify(state.SelectDataReducer.selectedData));
  localStorage.setItem('user', JSON.stringify(state.SelectDataReducer.user));
});

export default store;