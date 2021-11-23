import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Styles, Colors } from '@/theme';
import { useDispatch } from 'react-redux';
import { addCryptocurrency } from '@/redux/actions/Cryptocurrency';
import { goBack } from '@/navigation/Ref';

const addCrypto = () => {
    const [name, setName] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (name) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }, [name]);

    const onAddPress = async () => {
        setLoading(true);
        await dispatch(addCryptocurrency(name));
        goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add a Cryptocurrency</Text>

            <TextInput
                placeholder='Use a name or ticker symbol...'
                style={Styles.textinput(isCorrect)}
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity disabled={!isCorrect || loading} style={styles.button(isCorrect)} onPress={onAddPress}>
                {
                    loading ?
                        <ActivityIndicator color={Colors.FONT} size='small' />
                        :
                        <Text style={Styles.title}>Add</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default addCrypto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },
    text: {
        ...Styles.title,
        paddingBottom: 10
    },
    button: (isActive: boolean) => ({
        ...Styles.button,
        height: 50,
        width: 150,
        alignSelf: 'flex-end',
        marginTop: 10,
        opacity: isActive ? 1 : 0.4
    })
});