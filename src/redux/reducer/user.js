import { createReducer } from '@reduxjs/toolkit';

// local
import actionUser from 'redux/action/user';

const initialState = {
  id: 0,
  email: '',
  name: '',
  token: '',
  authList: [],
};

const reducerUser = createReducer(initialState, {
  [actionUser.signIn]: (state, action) => ({
    ...action.payload,
    authList: ['user'],
  }),
  [actionUser.signOut]: () => initialState,
  [actionUser.updateInfo]: (state, action) => ({
    ...state,
    id: action.payload.id,
    email: action.payload.email,
    name: action.payload.name,
  }),
});

export default reducerUser;
