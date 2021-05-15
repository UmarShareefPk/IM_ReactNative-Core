import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

import Incident from './Incident';
import AddIncident from './AddIncident';


export default function Incidents({navigation,screenProps}) {
  const [incidentModelVisibility, setIncidentModelVisibility] = useState(false);
 // console.log("navigation.screenProps",screenProps.login);
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addIncidentBtn} onPress={()=> setIncidentModelVisibility(true)}>
          <MaterialIcons name="add" size={24} color="#1A237E" />
          <Text style={styles.addIncidentText}>New Incident</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide" 
          visible={incidentModelVisibility}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIncidentModelVisibility(!addCommentModelVisibility);
          }}
        >
          <AddIncident hideModal={setIncidentModelVisibility}/>
        </Modal>

        <Input
          inputStyle={styles.searchBox}
          placeholder="Search by title or description"
          leftIcon={<FontAwesome name="search" size={24} color="#1A237E" />}
        />
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.buttonBox} onPress={()=>screenProps.login(false)} >
            <MaterialIcons name="navigate-before" size={24} color="green" />
                <Text style={styles.button}> Prevous 5 </Text>
               
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonBox} >
                <Text style={styles.button}> Next 5 </Text>
                <MaterialIcons name="navigate-next" size={24} color="green" />
            </TouchableOpacity>
        </View>

        <ScrollView>
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
        </ScrollView>
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
    addIncidentBtn:{
      flexDirection:'row',
      alignSelf: 'stretch',
      alignItems : 'center',
      justifyContent:'flex-end',
      marginRight:10,   
    },
    addIncidentText:{
      fontSize:17,
      fontWeight:'bold',
      color:'#1A237E',
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
        fontSize:18,
        color:'green'
    }

});
