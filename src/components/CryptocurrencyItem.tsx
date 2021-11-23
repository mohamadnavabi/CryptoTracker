import React, { memo, useCallback } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Animated } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Colors, Styles, Typography } from '@/theme';
import { toPrice } from '@/utils/numberWorker';
import * as icons from '@/assets/icons/coins';
import { Positive, Negative } from '@/assets/icons';
import { Trash } from '../assets/icons';
import { useDispatch } from 'react-redux';
import { deleteCryptocurrency } from '@/redux/actions/Cryptocurrency';

interface Props {
    id: string
    name: string
    symbol: string
    price: number
    priceChange: number
}

const CryptocurrencyItem = ({ id, name, symbol, price, priceChange }: Props) => {
    const dispatch = useDispatch();

    const renderRightActions = useCallback((progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0]
        });

        return (
            <TouchableOpacity onPress={() => dispatch(deleteCryptocurrency(id))}>
                <View style={styles.deleteWrapper}>
                    <Animated.View style={{ transform: [{ scale }] }}>
                        <Trash width={25} height={25} fill={Colors.WHITE} />
                    </Animated.View>
                </View>
            </TouchableOpacity>
        )
    }, []);

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.container}>
                {
                    Object.keys(icons).indexOf(symbol) != -1 ?
                        <Image source={icons[symbol]} style={styles.icon} />
                        :
                        <View style={[styles.icon, styles.defaultIcon]}>
                            <Text style={styles.defaultIconText}>{name.charAt(0).toLocaleUpperCase()}</Text>
                        </View>
                }

                <View style={Styles.flex1}>
                    <Text style={Styles.title}>{name}</Text>
                    <Text style={Styles.text}>{symbol}</Text>
                </View>

                <View>
                    <Text style={styles.price}>${price ? toPrice(price) : 0}</Text>
                    <View style={Styles.flexRow}>
                        {
                            priceChange >= 0 ?
                                <Positive width={25} height={25} fill='green' />
                                :
                                <Negative width={25} height={25} fill='red' />
                        }
                        <Text style={styles.change(priceChange >= 0)}>{toPrice(priceChange) || 0}%</Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    )
};

export default memo(CryptocurrencyItem);

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 15,
        borderBottomColor: Colors.BORDER,
        borderBottomWidth: 1.5
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    price: {
        ...Styles.title,
        textAlign: 'right',
    },
    change: (isPositive: boolean) => ({
        ...Styles.text,
        color: isPositive ? 'green' : 'red',
        textAlign: 'right',
        paddingHorizontal: 5
    }),
    deleteWrapper: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    defaultIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SECONDARY,
    },
    defaultIconText: {
        ...Styles.title,
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_24
    }
});