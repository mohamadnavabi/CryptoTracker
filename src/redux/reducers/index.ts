import { combineReducers } from 'redux';
import { Cryptocurrency } from '@/redux/reducers/Cryptocurrency';

export const rootReducer = combineReducers({
    cryptocurrency: Cryptocurrency,
});