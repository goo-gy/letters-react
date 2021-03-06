import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

// local
import rootReducer from 'redux/reducer/root.js';

const store = createStore(rootReducer);
persistStore(store);

export default store;
