import { createAction } from '@reduxjs/toolkit';

const actionDarkMode = {
  toggle: createAction('toggle'),
  set: createAction('set'),
};
export default actionDarkMode;
