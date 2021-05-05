import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

import Incident from './Incident';

export default function Incidents({navigation}) {
  
    return (
      <View style={styles.container}>
        <Input
          inputStyle={styles.searchBox}
          placeholder="Search by title or description"
          leftIcon={<FontAwesome name="search" size={24} color="#1A237E" />}
        />
        <View style={styles.btnContainer}>

            <TouchableOpacity style={styles.buttonBox} >
            <MaterialIcons name="navigate-before" size={24} color="green" />
                <Text style={styles.button}> Prevous 5 </Text>
               
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonBox} >
                <Text style={styles.button}> Next 5 </Text>
                <MaterialIcons name="navigate-next" size={24} color="green" />
            </TouchableOpacity>

        </View>

        <Incident />
        <Incident />
        <Incident />

        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate("IncidentDetails", { Id: 123 })}
        /> */}
      </View>
    );
}


const styles = StyleSheet.create({
    container :{
        backgroundColor:'#fff',
        marginTop:0,
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems : 'center'
    },
    searchBox :{
        fontSize:15,
        backgroundColor:'white'
    },
    btnContainer:{
        alignSelf: 'stretch',        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonBox:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{      
        fontSize:12,
        color:'green'
    }

});
