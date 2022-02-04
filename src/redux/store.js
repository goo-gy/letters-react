import { createStore } from 'redux';

// local
import rootReducer from './rootReducer.js';

const store = createStore(rootReducer);

export default store;
