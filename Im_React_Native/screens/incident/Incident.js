import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Incident({navigation}) {
    
    return (
      <TouchableOpacity  onPress={() => navigation.navigate("IncidentDetails", { Id: 123 })}>
        <View style={styles.incidentBox}>
          <View style={styles.titleArea}>
            <Text style={styles.title}>Title will go here</Text>
          </View>

          <View style={styles.fields}>
            <Text style={styles.field}>
              Status: <Text style={styles.fieldValue}>New</Text>
            </Text>
            <Text style={styles.field}>
              Due Date: <Text style={styles.fieldValue}>In 2 Days</Text>
            </Text>
            <Text style={styles.field}>
              Assigned To: <Text style={styles.fieldValue}>Umar Shareef</Text>
            </Text>
          </View>

          <Text style={styles.description}>
            Description will go here. In case of long text,... will be shown and
            full text will be shown on details screen
          </Text>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              {" "}
              Created by {"Ali Raza"} 7 days ago
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    incidentBox :{
        backgroundColor:'white',
        marginTop:5,
        padding:10,
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth:0.5
    },
    titleArea:{
    },
    title:{
        fontSize : 15,
        color:'#1A237E',
    },
    fields:{   
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'    
    },
    field:{
        color:'gray',
        fontSize:11
    },
    fieldValue:{
        color:'#848B98',
        fontWeight:'bold'
    },
    description:{
        marginTop:5,
        color:'gray',
        fontSize:13
    },
    footer :{
        marginTop:5,
        justifyContent:'flex-end'
    },
    footerText:{
        textAlign:'right',
        fontSize:10,
        color:'gray'
    }

});
