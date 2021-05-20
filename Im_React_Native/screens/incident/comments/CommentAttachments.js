import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList, Alert } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 

const CommentAttachments = ({editAble, attachments}) => {
  const [files, setFiles] = useState(attachments);
   
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
              <TouchableOpacity onPress={()=>deleteFiletConfirmation()} style={{...styles.attchment, marginRight: 7 }}>
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

  
  export default CommentAttachments;

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
