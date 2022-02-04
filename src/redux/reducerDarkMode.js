import { createAction, createReducer } from '@reduxjs/toolkit';

const actionDarkMode = {
  toggle: createAction('toggle'),
  set: createAction('set'),
};

const initialState = {
  darkMode: false,
};

const reducerDarkMode = createReducer(initialState, {
  [actionDarkMode.toggle]: (state, action) => ({
    ...state,
    darkMode: !state.darkMode,
  }),
  [actionDarkMode.set]: (state, action) => ({
    ...state,
    darkMode: action.payload,
  }),
});

export { actionDarkMode };
export default reducerDarkMode;
