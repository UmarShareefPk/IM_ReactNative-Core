import React from 'react'
import { View, Text } from 'react-native'

export default function IncidentDetails({navigation}) {
    const id = navigation.getParam('Id');
    return (
        <View>
            <Text>Id is {id}</Text>
            <Text>Incident Details</Text>
            <Text>Incident Details</Text>
            <Text>Incident Details</Text>
            <Text>Incident Details</Text>
        </View>
    )
}
