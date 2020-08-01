import * as React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import HomeScreen from '../Component/Home'
import DetailsScreen from '../Component/Details'


const Stack = createStackNavigator();

export default App = () => {
    return (
        <NavigationContainer ref = {navigationRef}>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}