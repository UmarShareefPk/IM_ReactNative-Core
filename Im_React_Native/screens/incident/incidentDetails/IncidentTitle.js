import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import { Input, FAB, Button  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { updateIncident } from "../../../store/actions/incidentsActions";
import { connect } from "react-redux";
import moment from "moment";;

 const IncidentTitle = ({
   incidentData,
   updateIncident,
   userId,   
   getUserNameById,
 }) => {
   const [editAble, setEditAble] = useState(false);
   const [createdDateToggle, setCreatedDateToggle] = useState(false);
   const [currentValue, setCurrentValue] = useState(incidentData.Title);
   const [newValue, setNewValue] = useState(incidentData.Title);

   useEffect(() => {
    setCurrentValue(incidentData.Title);
    setNewValue(incidentData.Title);  
   }, [incidentData])
   
   const updateTitle = () => {
     if(newValue.trim() == "")
        return;
      setCurrentValue(newValue);
      setEditAble(false);
      updateIncidentByField("Title", newValue);
   }

   const updateIncidentByField = (field , value) => {    
    let parameters = {
      IncidentId : incidentData.Id,
      Parameter : field,
      Value : value,
      UserId : userId
    };
    updateIncident(parameters); // Calling action here
  }

   return (
     <View>
       {editAble ? (
         <View style={styles.titleArea}>
           <Input
             placeholder="Enter new Title"
             defaultValue={newValue}
             onChangeText={(v) => setNewValue(v)}
           />
           <View style={styles.editbtnsBox}>
             <FAB
               title="Cancel"
               color="orange"
               onPress={() => setEditAble(false)}
               icon={<MaterialIcons name="cancel" size={30} color="white" />}
             />
             <FAB
               title="Save"
               style={{ marginLeft: 10 }}
               color="green"
               onPress={()=> updateTitle()}
               icon={<FontAwesome5 name="save" size={30} color="white" />}
             />
           </View>
         </View>
       ) : (
         <>
           <View style={styles.titleArea}>
             <Text style={styles.title}>{currentValue}</Text>

             <View style={styles.titleEdit}>
               <View style={styles.timestamp}>
                 <Text style={styles.timestampText}>
                   {" "}
                   Created by{"  "}
                   <Text style={{ fontWeight: "bold" }}>
                     {getUserNameById(incidentData.CreatedBy)}
                   </Text>
                 </Text>
                 <TouchableOpacity
                   onPress={() => setCreatedDateToggle(!createdDateToggle)}
                 >
                   <Text style={{ ...styles.timestampText, color: "indigo" }}>
                     {"  "}
                     {createdDateToggle
                       ? moment(incidentData.CreatedAT).format(
                           "MMMM DD YYYY, h:mm a"
                         )
                       : moment(incidentData.CreatedAT).fromNow()}
                   </Text>
                 </TouchableOpacity>
               </View>
               <Button
                 onPress={() => setEditAble(!editAble)}
                 title=""
                 width="25"
                 buttonStyle={styles.editBtn}
                 icon={<Feather name="edit-2" size={20} color="#1A237E" />}
               />
             </View>
           </View>
         </>
       )}
     </View>
   );
 };

  const mapStateToProps = (state) => {
    return {     
      allAssignees: state.users.users,
      userId :state.userLogin.userId, 
      incidentData: state.incidents.IncidentSelected,   
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {     
      updateIncident: (parameters) => dispatch(updateIncident(parameters)),  
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(IncidentTitle);
  

  const styles = StyleSheet.create({ 
    titleArea:{
      width: Dimensions.get('window').width , 
        alignSelf:'stretch',
        padding:15,     
    },
    title :{
        textAlign:'left',
        color:'#1A237E',
        fontSize:18
    },
    titleEdit:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    timestamp :{
      marginTop:5,
      flexDirection:'row',
      alignItems:'center',            
    }, 
    timestampText:{
      fontSize:11,
      color:'#848B98',
    },
    editBtn:{
      color:'red',    
      backgroundColor:'white',     
      textAlign:'right'     
  },
    editbtnsBox: {
      flexDirection: "row",
      justifyContent: "center",
    },
});