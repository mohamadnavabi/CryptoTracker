// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '@/navigation/Ref'

// Screens
import Home from '@/screens/Home';
import AddCryptocurrency from '@/screens/AddCryptocurrency';

// Headers
import HomeHeader from '@/components/HomeHeader';
import BackHeader from '@/components/BackHeader';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ header: () => <HomeHeader /> }} />
                <Stack.Screen name="AddCryptocurrency" component={AddCryptocurrency} options={{ header: () => <BackHeader /> }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}