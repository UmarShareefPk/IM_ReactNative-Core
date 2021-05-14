import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';

const AddComment = () => {

    const [singleFile, setSingleFile] = useState(null);

    const uploadImage = async () => {

        console.log("file", singleFile);
      // Check if any file is selected or not

    //   if (singleFile != null) {
    //     // If file selected then create FormData
    //    /* const fileToUpload = singleFile;
    //     const data = new FormData();
    //     data.append('name', 'Image Upload');
    //     data.append('file_attachment', fileToUpload);
    //     // Please change file upload URL
    //     let res = await fetch(
    //       'http://localhost/upload.php',
    //       {
    //         method: 'post',
    //         body: data,
    //         headers: {
    //           'Content-Type': 'multipart/form-data; ',
    //         },
    //       }
    //     );
    //     let responseJson = await res.json();
    //     if (responseJson.status == 1) {
    //       alert('Upload Successful');
    //     }*/
    //   } else {
    //     // If no file selected the show alert
    //     alert('Please Select File first');
    //   }
    };
  
    const selectFile = async () => {    
      try {      
        const res = await DocumentPicker.getDocumentAsync({         
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setSingleFile(res);
      } catch (err) {
        setSingleFile(null);
        // Handling any exception (If any)
      
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="add-comment" size={24} color="#1A237E" />
          <Text style={styles.headerText}>Add comment</Text>
        </View>
        <Input
          placeholder="Type a comment"
          multiline
          inputStyle={{ fontSize: 13 }}
          leftIcon={<MaterialIcons name="comment" size={20} color="#1A237E" />}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={selectFile}
        >
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={uploadImage}
        >
          <Text style={styles.buttonTextStyle}>Upload File</Text>
        </TouchableOpacity>
      </View>
    );
}

export default AddComment

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get("window").width-10, 
        marginBottom:5,
        paddingHorizontal:10,
        paddingVertical:8,
        borderWidth:0.5,
        borderRadius:10,
        borderStyle: 'dotted',
    },
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
       
    },
    headerText : {          
        paddingLeft:5,
        alignItems:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'#1A237E',
    }
});
