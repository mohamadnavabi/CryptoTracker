import { Config } from 'react-native-config';

export default class CryptocurrencyController {
    static getSymbols() {
        return new Promise((resolve, reject) => {
            fetch(`${Config.API_URL}/symbols`).then(response => response.json()).then(responseJson => {
                if (!responseJson.status.error_code)
                    resolve(responseJson.data);
                else
                    reject(responseJson.status.error_code);
            }).catch(error => {
                reject(error);
            });
        });
    }

    static getCurrency(symbol: string) {
        return new Promise((resolve, reject) => {
            fetch(`${Config.API_URL}/${symbol}/metrics`).then(response => response.json()).then(responseJson => {
                if (!responseJson.status.error_code)
                    resolve(responseJson.data);
                else
                    reject(responseJson.status.error_code);
            }).catch(error => {
                reject(error);
            });
        });
    }

    static async updateCryptocurrencies(list: any) {
        return new Promise((resolve, reject) => {
            Promise.all(list.map(item => {
                return fetch(`${Config.API_URL}/${item.symbol}/metrics`).then(response => response.json()).then(responseJson => {
                    if (responseJson.data && !responseJson.status.error_code)
                        return responseJson.data
                    else
                        reject(responseJson.status.error_code);
                });
            })).then((arrList) => {
                resolve(arrList)
            }).catch(error => {
                reject(error);
            });
        })
    }
}