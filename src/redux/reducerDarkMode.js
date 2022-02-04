import { createAction, createReducer } from '@reduxjs/toolkit';

const actionDarkMode = {
  toggle: createAction('toggle'),
  set: createAction('set'),
};

const initialState = false;

const reducerDarkMode = createReducer(initialState, {
  [actionDarkMode.toggle]: (state, action) => !state,
  [actionDarkMode.set]: (state, action) => action.payload,
});

export { actionDarkMode };
export default reducerDarkMode;
