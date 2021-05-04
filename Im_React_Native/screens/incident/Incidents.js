import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Incidents({navigation}) {
    console.log("Incidents");
    return (
        <View style={styles.container}>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
            <Text>Incidents</Text>
        <Button title='Go to Details' onPress={() => navigation.navigate('IncidentDetails', {Id:123})} />
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        marginTop:10,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems : 'center'
    }
});
