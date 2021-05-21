import React,{useState} from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import CommentAttachments from './CommentAttachments';
import { connect } from "react-redux";
import { updateComment , deleteComment  } from "../../../store/actions/incidentsActions";
import moment from "moment";;


const Comment = ({comment, updateComment, deleteComment, userId, allAssignees}) => {
    const [editAble, setEditAble] = useState(false);
    const [viewAttchments, setViewAttchments] = useState(false);
    const [currentValue, setCurrentValue] = useState(comment.CommentText);
    const [newValue, setNewValue] = useState(comment.CommentText);
    const [commentedDateToggle, setCommentedDateToggle] = useState(false)

    const deleteCommentConfirmation = () => {
        Alert.alert(
            "Delete Comment",
            "Are you sure you want to delete this comment?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes. Delete", onPress: () => deleteComment(comment.Id,comment.IncidentId, userId )   }
            ]
          );
    }

    const updateCommentText = ()=>{
      if (newValue.trim() == "") return;
      setCurrentValue(newValue);
      setEditAble(false);

      let changedComment = {
        Id : comment.Id,
        IncidentId : comment.IncidentId,
        UserId : userId,
        CreateDate : new Date(),
        CommentText : newValue,
        attachments :[]
      }
      updateComment(changedComment);
    }


    const getUserNameById = (id) => {   
      let user = allAssignees.find((assignee) => {
        return assignee.Id === id;
      });   
      if(!user){    
        return id; 
      }
      return user.FirstName + " " + user.LastName
    }


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.user}>{getUserNameById(comment.UserId)}</Text>
            <Text style={{ fontSize: 10, padding: 0 }}>added a comment</Text>
          </View>

          <TouchableOpacity
            onPress={() => setCommentedDateToggle(!commentedDateToggle)}
          >
            <Text style={{ fontSize: 10, color: "#1A237E" }}>
              {commentedDateToggle
                ? moment(comment.CreateDate).format("MMMM DD YYYY, h:mm a")
                : moment(comment.CreateDate).fromNow()}
            </Text>
          </TouchableOpacity>

          <View style={styles.commentBtns}>
            <TouchableOpacity onPress={() => setEditAble(!editAble)}>
              <Feather name="edit-2" size={18} color="#1A237E" />
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteCommentConfirmation}>
              <MaterialIcons name="delete-forever" size={25} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        {editAble ? (
          <View>
            <Input
              placeholder="Enter comment"
              multiline={true}
              defaultValue={currentValue}
              onChangeText={(v) => setNewValue(v)}
            />

            <View style={styles.editbtnsBox}>
              <FAB
                title="Cancel"
                color="orange"
                onPress={() => setEditAble(false)}
                icon={<MaterialIcons name="cancel" size={30} color="white" />}
              />
              <FAB
                title="Save"
                style={{ marginLeft: 10 }}
                color="green"
                onPress={() => updateCommentText()}
                icon={<FontAwesome5 name="save" size={30} color="white" />}
              />
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.commentText}>{currentValue}</Text>
          </View>
        )}
        {comment.attachments.length == 0 ? null : (
          <TouchableOpacity onPress={() => setViewAttchments(!viewAttchments)}>
            <Text style={styles.viewAttachmentsToggleText}>
              {" "}
              {viewAttchments ? "Hide Attachments" : "Show Attachments"}
            </Text>
          </TouchableOpacity>
        )}

        {viewAttchments ? (
          <CommentAttachments
            editAble={editAble}
            attachments={comment.attachments}
          />
        ) : null}
      </View>
    );
}

const mapStateToProps = (state) => {
  return { 
    allAssignees: state.users.users,   
    userId :state.userLogin.userId,  // logged in User Id    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {  
    updateComment : (comment) => dispatch(updateComment(comment)),
    deleteComment : (commentId, incidentId, userId) => dispatch(deleteComment(commentId, incidentId, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 10,
        // margin:5,
        marginBottom: 5,
        padding: 10,
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 0.5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    user: { fontSize: 12, fontWeight: 'bold', marginRight: 5, color:'#1A237E' },
    commentBtns:{
        width:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    commentText: {
        marginTop: 5,
        fontSize: 12,
        paddingHorizontal: 8,
        color: 'grey'
    },
    editbtnsBox: {
        flexDirection: "row",
        justifyContent: "center",
      },
      viewAttachmentsToggleText:{
          color:'blue',
          fontSize:12,
          paddingHorizontal:10,
          marginTop:5,
          
      },

});