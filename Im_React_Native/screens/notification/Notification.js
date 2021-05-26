import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { connect } from 'react-redux';
import { removeIncidentData, getIncidentById } from "../../store/actions/incidentsActions";
import { setNotificationStatus} from '../../store/actions/notificationsActions';
import moment from "moment";;

const Notification = ({
  userId,  
  allAssignees,
  notification,
  setNotificationStatus,
  removeIncidentData,
  getIncidentById,
  openIncidentDetails
}) => {
    const [read, setRead] = useState(notification.IsRead);
    const containerStyle = read? styles.container  : {...styles.container, ...styles.unRead };
    const notificationTextStyle = read? {...styles.notificationText, ...styles.notificationTextRead } : styles.notificationText   ;
    useEffect(() => {
      //console.log("loading");      
    }, []);

    const setStatus = (id, status) => {
      setNotificationStatus(id, status);
      setRead(status)
    };

    const getUserNameById = (id) => {   
      let user = allAssignees.find((assignee) => {
        return assignee.Id === id;
      });   
      if(!user){    
        return id;
      }
      return user.FirstName + " " + user.LastName
    }

    const openIncident = (notification) => {
      setStatus(notification.Id, true);
      openIncidentDetails(notification.IncidentId); 
    }

    return (
      <View style={containerStyle}>
        <Text style={styles.username}>
          {getUserNameById(notification.SourceUserId)
            .split(" ")
            .reduce((initials, value) => (initials += value.slice(0, 1)), "")}
        </Text>
        <TouchableOpacity style={styles.notificationTextBox} onPress={() => openIncident(notification)}>
          <Text style={notificationTextStyle}>{notification.NotifyAbout}</Text>
        </TouchableOpacity>

        <Text style={styles.time}>
          {moment(notification.CreateDate).fromNow()}
        </Text>

        {read ? (
          <TouchableOpacity onPress={() => setStatus(notification.Id, false)}>
            <Ionicons name="reader-outline" size={24} color="gray" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setStatus(notification.Id, true)}>
            <Ionicons name="reader" size={24} color="#f5f5f5" />
          </TouchableOpacity>
        )}
      </View>
    );
}

const mapStateToProps = (state) => {
  return {
    allAssignees: state.users.users,
    userId: state.userLogin.userId, // logged in User Id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNotificationStatus: (id, isRead) =>
      dispatch(setNotificationStatus(id, isRead)),
    removeIncidentData: () => dispatch(removeIncidentData()),
    getIncidentById: (incidentId) => dispatch(getIncidentById(incidentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);


const styles = StyleSheet.create({
    container:{
       // borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:20,
        margin:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        //backgroundColor:'#ABDEFC',
        backgroundColor:'white',
    },
    unRead:{
     // backgroundColor:'#1A237E',
      backgroundColor:'#18A5F9',
    },
    username:{
        color:'white',
        backgroundColor:'#c65102',
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:15
    },
    notificationTextBox:{
      width:200,
    },
    notificationText:{
        flex:0.9,
        fontSize:12,
        color:'#f5f5f5'
    },
    notificationTextRead:{
      color:'gray'
    },
    time:{
        fontSize:9,
        borderRadius:10,
        padding:5,
        color:'white',
        backgroundColor:"#0370AF",
    },
});