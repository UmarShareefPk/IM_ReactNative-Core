import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 

const AddComment = () => {

    

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
      </View>
    );
}

export default AddComment

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get("window").width,   
    },
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal:20,
    },
    headerText : {          
        paddingLeft:5,
        alignItems:'center',
        fontSize:15,
        fontWeight:'bold',
        color:'#1A237E',
    }
});
