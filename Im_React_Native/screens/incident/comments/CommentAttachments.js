import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';


const CommentAttachments = ({editAble}) => {
  
    let files = [
      { Id: 1, FileName: "File 1 abdkadkjadshkahd bjdaksjhdk" },
      { Id: 2, FileName: "File 2" },
      { Id: 3, FileName: "File 12" },
      { Id: 4, FileName: "File 12" },
      { Id: 5, FileName: "File 13" },
      { Id: 6, FileName: "File 1d" },
    ];
  
    const renderFiles = ({ item }) => {
      
      return (
        <View style={styles.attchment}>
          {editAble ? (
            <TouchableOpacity style={{ marginRight: 7 }}>
              <MaterialIcons name="delete-forever" size={30} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <MaterialIcons name="file-download" size={27} color="blue" />
            </TouchableOpacity>
          )}
  
          <Text>{item.FileName}</Text>
        </View>
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
