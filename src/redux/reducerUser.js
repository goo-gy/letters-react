import { createAction, createReducer } from '@reduxjs/toolkit';

const actionUser = {
  updateEmail: createAction('updateEmail'),
  updateName: createAction('updateName'),
};

const initialState = {
  email: '',
  name: '',
};

const reducerUser = createReducer(initialState, {
  [actionUser.updateEmail]: (state, action) => ({
    ...state,
    email: action.payload,
  }),
  [actionUser.updateName]: (state, action) => ({
    ...state,
    name: action.payload,
  }),
});

export { actionUser };
export default reducerUser;
