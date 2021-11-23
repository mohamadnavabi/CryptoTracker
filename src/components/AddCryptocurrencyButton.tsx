import React, { memo } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { navigate } from '@/navigation/Ref';
import { Styles, Typography } from '@/theme';

const AddCryptocurrencyButton = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigate('AddCryptocurrency')}>
            <Text style={styles.text}>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>
    )
}

export default memo(AddCryptocurrencyButton);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    text: {
        ...Styles.text,
        fontSize: Typography.FONT_SIZE_14
    }
});