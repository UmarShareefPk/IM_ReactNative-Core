import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList, Alert } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { incidentsUrls } from "../../../api/apiURLs";
import * as WebBrowser from 'expo-web-browser';
import { deleteAttachment } from "../../../store/actions/incidentsActions";
import { connect } from "react-redux";

const CommentAttachments = ({ editAble, attachments, incidentId, userId, deleteAttachment }) => {
  const [files, setFiles] = useState(attachments);

  const deleteFiletConfirmation = (file) => {
    Alert.alert(
      "Delete Attachment",
      "Are you sure you want to delete this file?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Yes. Delete", onPress: () => deleteFile(userId, incidentId, file)  },
      ]
    );
  };

  const deleteFile = (userId, incidentId, file)=> {
    deleteAttachment("comment", userId, incidentId, file);    
    setFiles(files.filter(f => f.Id!==file.Id));
  }

  const downloadFile = async (file) => {

   let url =
     incidentsUrls.downloadFileUrl +
     "type=comment" +
     "&commentId=" +
     file.CommentId +
     "&incidentId=" +
     incidentId +
     "&filename=" +
     file.FileName +
     "&contentType=" +
     file.ContentType;
     let result = await WebBrowser.openBrowserAsync(url);    
    
  }

  const renderFiles = ({ item }) => {
    return (
      <>
        {editAble ? (
          <TouchableOpacity
            onPress={() => deleteFiletConfirmation(item)}
            style={{ ...styles.attchment, marginRight: 7 }}
          >
            <MaterialIcons name="delete-forever" size={30} color="red" />
            <Text>{item.FileName}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => downloadFile(item)}
            style={{ ...styles.attchment, marginRight: 10 }}
          >
            <MaterialIcons name="file-download" size={27} color="blue" />
            <Text>{item.FileName}</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.attchments}>
      <FlatList
        //numColumns={2}
        contentContainerStyle={{ justifyContent: "center" }}
        style={{ flex: 1, marginTop: 10 }}
        data={files}
        renderItem={renderFiles}
        keyExtractor={(file, index) => file.Id}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    incidentId: state.incidents.IncidentSelected.Id,
    userId :state.userLogin.userId,  // logged in User Id       
  };
};

const mapDispatchToProps = (dispatch) => {
  return {   
    deleteAttachment : (type, userid, incidentId , file) => dispatch(deleteAttachment(type, userid, incidentId ,file)),
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentAttachments);


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
