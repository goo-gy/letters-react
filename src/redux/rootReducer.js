import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// local
import reducerDarkMode from './reducerDarkMode';

const persistConfig = { key: 'root', storage };

// const rootReducer = combineReducers({ reducerDarkMode });
const persistedReducer = persistReducer(persistConfig, reducerDarkMode);

export default persistedReducer;
