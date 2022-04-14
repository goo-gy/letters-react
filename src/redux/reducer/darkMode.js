import { createReducer } from '@reduxjs/toolkit';

// local
import actionDarkMode from 'redux/action/darkMode';

const initialState = false;

const reducerDarkMode = createReducer(initialState, {
  [actionDarkMode.toggle]: (state) => !state,
  [actionDarkMode.set]: (state, action) => action.payload,
});

export default reducerDarkMode;
