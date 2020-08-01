import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../Navigation/NavigationService'

export default Details = () => {
    return (
        <View
            //onPress={() => NavigationService.navigate("Details")}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    )
}