import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const actions = {
  darkMode: {
    toggle: createAction('darkMode/toggle'),
    set: createAction('darkMode/set'),
  },
};

const initialState = {
  darkMode: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.darkMode.toggle.type:
      return { ...state, darkMode: !state.darkMode };
    case actions.darkMode.set.type:
      return { ...state, darkMode: action.payload };
  }
  return state;
};

const store = createStore(reducer);

export { actions };
export default store;
