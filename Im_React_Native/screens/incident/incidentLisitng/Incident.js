import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import moment from "moment";;

export default function Incident({navigation,incident, getUserNameById}) {
  
  const statusName = (status) => {
    switch (status) {
      case "N":
        return "New";
      case "C":
        return "Closed";
      case "A":
        return "Approved";
      case "I":
        return "In Progress";
      default:
        return status;
    }
  };

  let currentDate = new Date();
  const dueDateColor =
    new Date(incident.DueDate) < currentDate ? "red" : "green";
  
    return (
      <TouchableOpacity  onPress={() => navigation.navigate("IncidentDetails", { Id: incident.Id })}>
        <View style={styles.incidentBox}>
          <View style={styles.titleArea}>
            <Text style={styles.title}>{incident.Title}</Text>
          </View>

          <View style={styles.fields}>
            <Text style={styles.field}>
              Status: <Text style={styles.fieldValue}>{statusName(incident.Status)}</Text>
            </Text>
            <Text style={styles.field}>
              Due Date: <Text style={{...styles.fieldValue, color:dueDateColor}}>
                            {moment(incident.DueDate).fromNow()}</Text>
            </Text>
            <Text style={styles.field}>
              Assigned To: <Text style={styles.fieldValue}>{getUserNameById(incident.AssignedTo)}</Text>
            </Text>
          </View>

          <Text style={styles.description}>
              {incident.Description.length < 150? incident.Description : incident.Description.slice(0,150)+"..."}
          </Text>

          <View style={styles.footer}>
            <Text style={styles.footerText}>              
              Created by <Text style={{fontWeight:'bold'}}>{getUserNameById(incident.CreatedBy)}</Text> {moment(incident.CreatedAT).fromNow()}
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
        borderWidth:0.5,
       
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
      color:'#1A237E',
        fontSize:10
    },
    fieldValue:{
        color:'#848B98',
        fontWeight:'bold'
    },
    description:{
        marginTop:5,
        color:'gray',
        fontSize:13,
        //width: Dimensions.get("window").width-10, 
        justifyContent:'center'
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
