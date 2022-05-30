import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// local
import reducerDarkMode from './darkMode';
import reducerUser from './user';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  darkMode: reducerDarkMode,
  user: reducerUser,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
