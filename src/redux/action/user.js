import { createAction } from '@reduxjs/toolkit';

const actionUser = {
  signIn: createAction('user/signIn'),
  signOut: createAction('user/signOut'),
  updateInfo: createAction('user/updateInfo'),
};
export default actionUser;
