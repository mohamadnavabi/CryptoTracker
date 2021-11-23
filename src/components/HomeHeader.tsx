import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors, Styles, Typography } from '@/theme';

interface Props {

}

const HomeHeader = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CryptoTracker Pro</Text>

            <Image source={require('@/assets/images/sample.jpg')} style={styles.profile} />
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        height: 110,
        backgroundColor: Colors.PRIMARY,
    },
    text: {
        ...Typography.FONT_BOLD,
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_22,
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
    },
});