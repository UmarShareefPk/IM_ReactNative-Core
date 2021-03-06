import React, {useState} from 'react';
import { View, Text, ScrollView, Modal, StyleSheet,TouchableOpacity, Dimensions } from 'react-native';
import Comment from './Comment';
import AddComment from './AddComment';
import { Feather, FontAwesome5, MaterialIcons, } from '@expo/vector-icons'; 
import { connect } from "react-redux";


const Comments = ({incidentData}) => {
const [addCommentModelVisibility, setAddCommentModelVisibility] = useState(false);
    return (        
        <>
        <TouchableOpacity onPress={()=> setAddCommentModelVisibility(true)}>
            <View style={styles.header}>
            <MaterialIcons name="add-comment" size={24} color="#1A237E" />
            <Text style={styles.headerText}>Add comment</Text>
            </View>
        </TouchableOpacity>
            <Modal
                animationType="slide"               
                visible={addCommentModelVisibility}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAddCommentModelVisibility(!addCommentModelVisibility);
                }}
            >
                <AddComment hideModal={setAddCommentModelVisibility} />
            </Modal>
           
            <ScrollView>
            {
                incidentData.Comments.map((comment => {
                   return <Comment key={comment.Id} comment={comment} />
                }))
            }
             
            </ScrollView>
        </>
    )
}

const mapStateToProps = (state) => {
    return {     
      incidentData: state.incidents.IncidentSelected,   
    };
  }; 
  
export default connect(mapStateToProps, null)(Comments);


const styles = StyleSheet.create({
   
    header:{
        width: Dimensions.get("window").width-30, 
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:10,
       
    },
    headerText : {          
        paddingLeft:5,
        alignItems:'flex-start',
        fontSize:15,
        fontWeight:'bold',
        color:'#1A237E',
    },
    
});