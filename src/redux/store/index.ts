import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from '@/redux/reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cryptocurrency'],
};

export const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk));

export const persistor = persistStore(store);