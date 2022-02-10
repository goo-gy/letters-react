import { createReducer } from '@reduxjs/toolkit';

// local
import actionUser from 'redux/action/user';

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

export default reducerUser;
