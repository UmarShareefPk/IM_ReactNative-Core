import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';
import { ScrollView } from 'react-native';
import AssigneeDropDown from '../shared/AssigneeDropdown';
import DateTimePicker from "../shared/DateTimePicker";

const AddIncident = ({hideModal}) => {

    const [files, setFiles] = useState(null);
    const [assignee, setAssignee] = useState('2')
    const selectFiles = async () => {    
      try {      
        const res = await DocumentPicker.getDocumentAsync({         
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setFiles(res);
      } catch (err) {
        setFiles(null);
        // Handling any exception (If any)      
      }
    };

    return (
   
      <View style={styles.container}>

        <View style={styles.header}>
          <MaterialIcons name="add-comment" size={40} color="#1A237E" />
          <Text style={styles.headerText}>Add Incident</Text>
        </View>
        <Input
          placeholder="Type title"          
          inputStyle={{ fontSize: 18 }}
          leftIcon={<MaterialIcons name="title" size={25} color="#1A237E" />}
        />
        <Input
          placeholder="Type a comment"
          multiline
          inputStyle={{ fontSize: 18 }}
          leftIcon={<MaterialIcons name="comment" size={25} color="#1A237E" />}
        />

        <AssigneeDropDown selectedAssignee={assignee} assigneeChanged={setAssignee} />
        <DateTimePicker label={"Start Time"} datetime={"Jan 12, 2020 5:30 PM"} />
        <DateTimePicker label={"Due Date"} datetime={"Dec 31, 2021 5:30 PM"} />

        <TouchableOpacity
          style={styles.selectFileBtn}
          onPress={selectFiles}
        >
          <MaterialIcons name="attachment" size={35} color="#1A237E" />
          <Text style={styles.selectFileText} >Select Files</Text>
        </TouchableOpacity>

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
            //onPress={() => update()}
            icon={<FontAwesome5 name="save" size={30} color="white" />}
          />
        </View>
      </View>
      
    );
}

export default AddIncident

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
    container:{
        flex:1,
        justifyContent:'center',
        width: Dimensions.get("window").width-10, 
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
      marginHorizontal:10
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
});
