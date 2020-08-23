import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

//initial state
const initialState = {};

const middleware = [thunk];

//persited and nonpersistedStore
// const allReducers = combineReducers({
//     persistedStore: persistReducer({ ...persistConfig, storage }, reducer)
// })

// purgeStoredState()

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f

const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        devTools
    )
);
export const persistor = persistStore(store)

export default store;
