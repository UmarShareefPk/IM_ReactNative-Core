import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';
import { connect } from "react-redux";
import { addNewComment  } from "../../../store/actions/incidentsActions";


const AddComment = ({
  hideModal, 
  userId,
  addNewComment,
  incidentId
}) => {

    const [files, setFiles] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [selectedFilesCount, setSelectedFilesCount] = useState(0);

    const selectFiles = async () => {    // did not work
      try {      
        const res = await DocumentPicker.getDocumentAsync({   
          type: "*/*",
         // multiple: true,
          copyToCacheDirectory: true      
        });
        // Array [
        //   "Attachment11",
        //   Object {
        //     "name": "sample2.txt",
        //     "size": 2859,
        //     "type": "success",
        //     "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540umar-expo%252FIm_React_Native/DocumentPicker/3df9bf38-aa25-41d0-9da3-de3d1dd90640.txt",
        //   },
        // Printing the log realted to the file
        //console.log('res : ' + JSON.stringify(res));
        //console.log('res : ' + res);
        // Setting the state to show single file attributes
        setFiles([...files, res]);
        setSelectedFilesCount(selectedFilesCount+1);

      } catch (err) {
        setFiles(null);
        // Handling any exception (If any)      
      }
    };

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
      });
    };

    const addComment = () => {
      if (newComment.trim() === "") {
           return;
      }
      const formData = new FormData();  
      if (files) {
        for (let i = 0; i < files.length; i++) {       
          formData.append(
            "Attachment" + i + 1,
            files[i],
            files[i].name
          );
        }
      }
      formData.append("CommentText", newComment.trim());
      formData.append("IncidentId", incidentId);
      formData.append("UserId", userId);

    //  console.log("formData", formData);
      addNewComment(formData);
   
      hideModal(false);
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="add-comment" size={40} color="#1A237E" />
          <Text style={styles.headerText}>Add comment</Text>
        </View>

        <Input
          placeholder="Type a comment"
          multiline
          onChangeText={(v) => setNewComment(v)}
          inputStyle={{ fontSize: 18 }}
          leftIcon={<MaterialIcons name="comment" size={25} color="#1A237E" />}
        />

        <TouchableOpacity style={styles.selectFileBtn} onPress={pickDocument}>
          <MaterialIcons name="attachment" size={35} color="#1A237E" />
          <Text style={styles.selectFileText}>
            {selectedFilesCount > 0
              ? selectedFilesCount + " files selected"
              : "Select Files"}
          </Text>
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
            onPress={() => addComment()}
            icon={<FontAwesome5 name="save" size={30} color="white" />}
          />
        </View>
      </View>
    );
}

const mapStateToProps = (state) => {
  return {
    allAssignees: state.users.users,
    incidentId: state.incidents.IncidentSelected.Id,
    userId :state.userLogin.userId,  // logged in User Id       
  };
};

const mapDispatchToProps = (dispatch) => {
  return {    
    addNewComment: (formData) => dispatch(addNewComment(formData))    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);


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
