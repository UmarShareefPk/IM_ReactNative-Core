import React,{useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header} >
                  <Text style={styles.headerText}>{title}</Text>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    header:{
        marginLeft:20,
    },
    headerText:{
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       
    }
});

export default Header
