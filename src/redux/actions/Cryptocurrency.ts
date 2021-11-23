import CryptocurrencyController from '@/controllers/CryptocurrencyController';
import { ADD_CRYPTOCURRENCY, UPDATE_CRYPTOCURRENCY, DELETE_CRYPTOCURRENCY } from '@/redux/types/Cryptocurrency';

// Action to add a cryptocurrency to list
export const addCryptocurrency = (cryptocurrency: string) => {
    return (dispatch) => {
        return CryptocurrencyController.getCurrency(cryptocurrency).then(result => {
            dispatch({
                type: ADD_CRYPTOCURRENCY,
                payload: result
            });
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            } else {
                console.log(error);
            }
        });
    };
};

// Action cryptocurrency list
export const updateCryptocurrencies = (list: any) => {
    return (dispatch) => {
        return CryptocurrencyController.updateCryptocurrencies(list).then(result => {
            dispatch({
                type: UPDATE_CRYPTOCURRENCY,
                payload: result
            });
        }).catch(error => {
            if (error.response) {
                console.log(error.response);
            } else {
                console.log(error);
            }
        });
    };
};

// Action to delete a cryptocurrency to list
export const deleteCryptocurrency = (cryptocurrencyId: string) => ({
    type: DELETE_CRYPTOCURRENCY,
    payload: cryptocurrencyId
});