import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Notification from './Notification'
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 

const Notifications = ({showModal}) => {
    return (
        <View>
            <TouchableOpacity style={styles.closeBtn} onPress={()=> showModal(false)} >
                    <MaterialIcons name="close" size={35} color="black" />
            </TouchableOpacity>
       
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </View>
    )
}

export default Notifications


const styles = StyleSheet.create({
   
    closeBtn:{       
        justifyContent:'center',
        alignItems:'center',
    },
 
});