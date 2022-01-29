import { createStore } from 'redux';

const actionTypes = {
  darkMode: {
    toggle: 'darkMode/toggle',
    set: 'darkMode/set',
  },
};

const initialState = {
  darkMode: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.darkMode.toggle:
      return { ...state, darkMode: !state.darkMode };
    case actionTypes.darkMode.set:
      return { ...state, darkMode: action.value };
  }
  return state;
};

const store = createStore(reducer);

const actions = {
  darkMode: {
    toggle: () => ({
      type: actionTypes.darkMode.toggle,
    }),
    set: (value) => ({
      type: actionTypes.darkMode.set,
      value: value,
    }),
  },
};

export { actions };
export default store;
