import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList, Alert } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { connect } from "react-redux";
import { updateIncident, deleteAttachment } from "../../../store/actions/incidentsActions";

const IncidentAttachments = ( {
  incidentData,
  userId,
  deleteAttachment,
  updateIncident,
}) => {
    const [editAble, setEditAble] = useState(false);
    const [files, setFiles] = useState(incidentData.Attachments)
    
    const deleteFiletConfirmation = () => {
      Alert.alert(
          "Delete Attachment",
          "Are you sure you want to delete this file?",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Yes. Delete", onPress: () => console.log("OK Pressed") }
          ]
        );
  }

    const renderFiles = ({ item }) => {      
      return (
        <>
          {editAble ? (            
              <TouchableOpacity  onPress={()=>deleteFiletConfirmation()} style={{...styles.attchment, marginRight: 7 }}>
                <MaterialIcons name="delete-forever" size={30} color="red" />
                <Text>{item.FileName}</Text>
              </TouchableOpacity>
         
          ) : (            
              <TouchableOpacity style={{...styles.attchment, marginRight: 10 }}>
                <MaterialIcons name="file-download" size={27} color="blue" />
                <Text>{item.FileName}</Text>
              </TouchableOpacity>            
          )}
        </>
      );
    };
  
    return (
      <View style={styles.attchments}>
      
        <View style={styles.title}>
          <Text style={styles.titleText}>
             Attachments
          </Text>
          <Button
            onPress={() => setEditAble(!editAble)}
            title=""
            buttonStyle={styles.editBtn}            
            icon={<Feather name="edit-2" size={20} color="#1A237E" />}
          />
        </View>

        <FlatList      
          //numColumns={2}
          contentContainerStyle = {{justifyContent:'center',}}
          style = {{flex: 1,marginTop:10}} 
          data={files} 
          renderItem={renderFiles} 
          keyExtractor={(file, index) => file.Id}
        />
      </View>
    );
  };
 
  const mapStateToProps = (state) => {
    return {     
      incidentData: state.incidents.IncidentSelected,
      userId :state.userLogin.userId,  // logged in User Id      
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {    
      updateIncident: (parameters) => dispatch(updateIncident(parameters)),   
      deleteAttachment : (type, userid, incidentId , file) => dispatch(deleteAttachment(type, userid, incidentId ,file))    
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(IncidentAttachments);


  const styles = StyleSheet.create({
    title :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginTop:5
    },
    titleText:{
        fontWeight:'bold',
        color:'#1A237E',
    },
    editBtn:{
        color:'red',
        backgroundColor:'white',
       // marginTop:5
    },
    attchments :{
      width: Dimensions.get('window').width,
       flex:1,    
       justifyContent:'center',
    },
    attchment:{     
       flexDirection:'row',
       alignItems:'center',
       marginLeft:30,
       textAlign:'right',     
    }
});
