import { createStore } from 'redux';

const actions = {
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
    case actions.darkMode.toggle:
      return { ...state, darkMode: !state.darkMode };
    case actions.darkMode.set:
      return { ...state, darkMode: action.value };
  }
  return state;
};

const store = createStore(reducer);

const actionCreator = {
  darkModeToggle: () => ({
    type: actions.darkMode.toggle,
  }),
  darkModeSet: (value) => ({
    type: actions.darkMode.set,
    value: value,
  }),
};

export { actionCreator };
export default store;
