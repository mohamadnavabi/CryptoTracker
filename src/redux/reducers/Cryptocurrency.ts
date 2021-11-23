import { ADD_CRYPTOCURRENCY, UPDATE_CRYPTOCURRENCY, DELETE_CRYPTOCURRENCY } from '@/redux/types/Cryptocurrency';

const initialState = {
    symbols: [],
    list: [],
};

export const Cryptocurrency = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CRYPTOCURRENCY:
            return {
                ...state,
                list: [...state.list.filter(item => item.id !== action.payload.id), action.payload]
            }
        case DELETE_CRYPTOCURRENCY:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload)
            }
        case UPDATE_CRYPTOCURRENCY:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
};