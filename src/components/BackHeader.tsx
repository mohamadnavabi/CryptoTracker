import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { goBack } from '@/navigation/Ref';
import { Styles } from '@/theme';

const BackHeader = () => {
    return (
        <TouchableOpacity style={Styles.padding15} onPress={() => goBack()}>
            <Text style={Styles.text}>{'<'}  Back to List</Text>
        </TouchableOpacity>
    )
}

export default BackHeader;