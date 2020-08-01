import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../Navigation/NavigationService'

export default Home = () => {
    return (
        <TouchableOpacity
            onPress={() => NavigationService.navigate("Details")}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </TouchableOpacity>
    )
}