import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const actions = {
  darkMode: {
    toggle: createAction('darkMode/toggle'),
    set: createAction('darkMode/set'),
  },
};

const initialState = {
  darkMode: false,
};
const reducer = createReducer(initialState, {
  [actions.darkMode.toggle]: (state, action) => ({
    ...state,
    darkMode: !state.darkMode,
  }),
  [actions.darkMode.set.type]: (state, action) => ({
    ...state,
    darkMode: action.payload,
  }),
});

const store = createStore(reducer);

export { actions };
export default store;
