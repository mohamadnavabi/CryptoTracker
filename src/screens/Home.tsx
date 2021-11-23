import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateCryptocurrencies } from '@/redux/actions/Cryptocurrency';
import { getList } from '@/selectors/CryptocurrencySelector';
import CryptocurrencyItem from '@/components/CryptocurrencyItem';
import AddCryptocurrencyButton from '@/components/AddCryptocurrencyButton';
import { Colors } from '@/theme';

const UPDATE_CRYPTOCURRENCIES_TIME = 10000; // Per miliseconds

const Home = () => {
    // Redux Selectors
    const list = useSelector(getList);
    // Redux dispatch
    const dispatch = useDispatch();
    console.log(list)
    // Update cryptocurrencies
    useEffect(() => {
        const updateInterval = setInterval(() => {
            dispatch(updateCryptocurrencies(list));
        }, UPDATE_CRYPTOCURRENCIES_TIME);

        return () => clearInterval(updateInterval);
    });

    const keyExtractor = useCallback((item, index) => item.id || index.toString(), [list]);

    const renderItem = useCallback(({ item }) => (
        <CryptocurrencyItem
            id={item.id}
            name={item.name}
            symbol={item.symbol}
            price={item.market_data.price_usd}
            priceChange={item.market_data.percent_change_usd_last_24_hours}
        />
    ), [list]);

    return (
        <SafeAreaView>
            <StatusBar
                backgroundColor={Colors.PRIMARY}
                barStyle='light-content'
            />

            <FlatList
                data={list}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                ListFooterComponent={<AddCryptocurrencyButton />}
            />
        </SafeAreaView>
    )
}

export default Home;
