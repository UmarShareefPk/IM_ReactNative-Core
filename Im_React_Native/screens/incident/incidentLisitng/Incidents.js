import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

import Incident from './Incident';
import AddIncident from '../AddIncident';
import Pagination from './Pagination';


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
        {/*    <TouchableOpacity style={styles.buttonBox} onPress={()=>screenProps.login(false)} >
                   </TouchableOpacity>           
        </View> */}
        <View style={{}}>
          <Pagination TotalRecords= {50} PostsPerPage={10} />
        </View>

        <ScrollView style={{marginTop:20}} >
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
          <Incident navigation={navigation} />
        </ScrollView>
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
