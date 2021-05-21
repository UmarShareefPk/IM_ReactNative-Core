import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView } from 'react-native';
import AssigneeDropDown from '../shared/AssigneeDropdown';
import DateTimePicker from "../shared/DateTimePicker";
import { connect } from 'react-redux';
import { allUsers } from '../../store/actions/usersActions';
import { addNewIncident } from '../../store/actions/incidentsActions';
import moment from "moment";

const AddIncident = ({
  hideModal,
  allAssignees,
  userId,
  getAllAssignees,
  addNewIncident,
  addNewError,
  AddNewIncidentStatus,
}) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [additionalData, setAdditionalData] = useState("");
  const [assignee, setAssignee] = useState(userId);
  const [startTime, setStartTime] = useState((new Date()));
  const [duedate, setDuedate] = useState((new Date()));
  const [files, setFiles] = useState([]);
  const [selectedFilesCount, setSelectedFilesCount] = useState(0);

  const [error, setError] = useState("");

  useEffect(() => {
    getAllAssignees();
  }, [])

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {    
        let { name, size, uri } = response;
        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        // console.log(fileToUpload, '...............file')
        setFiles([...files, fileToUpload]);
        setSelectedFilesCount(selectedFilesCount + 1);     
      }
    }).catch(err => console.log("ERROR in PICKING : ",err));
  };


  const saveIncident = () => {
    const formData = new FormData(); 

    if(title.trim() == ""){
      setError("Title is required.");
      return;
    }

    if(description.trim() == ""){
      setError("Description is required.");
      return;
    }
    setError("");
    if(files){
        for(let i = 0; i < files.length ; i++){
          formData.append( 
            "Attachment" + i+1, 
            files[i], 
            files[i].name 
          );
        }
    }   
     formData.append("CreatedBy", userId); 
     formData.append("AssignedTo", assignee);
     formData.append("Title", title); 
     formData.append("Description", description); 
     formData.append("AdditionalDeta", additionalData); 
     formData.append("StartTime", moment(startTime).toISOString() ); 
     formData.append("DueDate",  moment(duedate).toISOString() ); 
     formData.append("Status", "N"); 
    
     addNewIncident(formData);
  }

  if(AddNewIncidentStatus){
    hideModal(false);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="add-comment" size={40} color="#1A237E" />
          <Text style={styles.headerText}>Add Incident</Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Input
            placeholder="Type title"
            onChangeText={(v) => setTitle(v)}
            inputStyle={{ fontSize: 18 }}
            leftIcon={<MaterialIcons name="title" size={25} color="#1A237E" />}
          />

          <Input
            placeholder="Type description"
            multiline
            onChangeText={(v) => setDescription(v)}
            inputStyle={{ fontSize: 18 }}
            leftIcon={
              <MaterialIcons name="description" size={25} color="#1A237E" />
            }
          />

          <Input
            placeholder="Type any more details"
            multiline
            onChangeText={(v) => setAdditionalData(v)}
            inputStyle={{ fontSize: 18 }}
            leftIcon={
              <MaterialIcons name="details" size={25} color="#1A237E" />
            }
          />

          <View style={{ paddingHorizontal: 10 }}>
            <AssigneeDropDown
              selectedAssignee={assignee}
              assigneeChanged={setAssignee}
              allAssignees={allAssignees}
            />
            <DateTimePicker
              label={"Start Time"}
              datetime={new Date()}
              datetimeChanged={setStartTime}
            />
            <DateTimePicker
              label={"Due Date"}
              datetime={new Date()}
              datetimeChanged={setDuedate}
            />
          </View>

          <TouchableOpacity style={styles.selectFileBtn} onPress={pickDocument}>
            <MaterialIcons name="attachment" size={35} color="#1A237E" />
            <Text style={styles.selectFileText}>
              {selectedFilesCount > 0
                ? selectedFilesCount + " files selected"
                : "Select Files"}
            </Text>
          </TouchableOpacity>
        </View>
        {error==""? null : (<Text style={styles.errorText}>{error}</Text>)}        
        {addNewError==""? null : (<Text style={styles.errorText}>{addNewError}</Text>)}

        <View style={styles.btnsBox}>
          <FAB
            title="Cancel"
            color="orange"
            onPress={() => hideModal(false)}
            icon={<MaterialIcons name="cancel" size={30} color="white" />}
          />
          <FAB
            title="Save"
            style={{ marginLeft: 10 }}
            color="green"
            onPress={() => saveIncident()}
            icon={<FontAwesome5 name="save" size={30} color="white" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {        
  return{
      allAssignees : state.users.users,
      user_Name :state.userLogin.user_Name, // Logged in User's name
      userId :state.userLogin.userId,  // logged in User Id      
      addNewError :state.incidents.AddNewIncidentError, 
      AddNewIncidentStatus :state.incidents.AddNewIncidentStatus 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getAllAssignees: () => dispatch(allUsers()),
      addNewIncident : (formData) => dispatch(addNewIncident(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIncident);

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
    container:{
        flex:1,
        justifyContent:'center',
        width: Dimensions.get("window").width-10, 
        marginTop:20,
        marginBottom:5,
        paddingHorizontal:10,
        paddingVertical:8,
        // borderWidth:0.5,
        // borderRadius:10,
        // borderStyle: 'dotted',
    },
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:20,
       
    },
    headerText : {          
        paddingLeft:5,
        alignItems:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#1A237E',
    },
    selectFileBtn:{
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderColor:'gray',
      borderRadius:10,
      marginHorizontal:10,
      marginBottom:5,
    },
    selectFileText:{
      padding:5,
      color:'gray',
      fontSize:18

    },
    btnsBox:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:40
    },
    errorText:{ 
      margin: 5, 
      textAlign: "center", 
      color: "red", 
      fontSize: 20 
    },
});
