import { createAction } from '@reduxjs/toolkit';

const actionUser = {
  updateEmail: createAction('updateEmail'),
  updateName: createAction('updateName'),
};
export default actionUser;
