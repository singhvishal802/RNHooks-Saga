import  React , { useState , useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import NavigationService from '../Navigation/NavigationService'
import { types } from '../Action/ActionTypes'

export default Details = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: types.HOME,
            payload: true
        })
    }, [])

    return (
        <View
            //onPress={() => NavigationService.navigate("Details")}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    )
}