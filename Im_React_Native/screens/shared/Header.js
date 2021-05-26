import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Feather, FontAwesome5, MaterialIcons,  } from '@expo/vector-icons'; 
import Notifications from '../notification/Notifications';
import { signOut } from "../../store/actions/userLoginActions";
import { connect } from 'react-redux';
import {getAllNotifications} from '../../store/actions/notificationsActions';
import Receiver from "../../signalR/Receiver"
import { removeIncidentData } from "../../store/actions/incidentsActions";

const Header = ({
  navigation,
  title,
  signOut,
  user_Name,
  notifications,
  getNotifications,
  userId,
  removeIncidentData,
}) => {
  const [notificationsVisibility, setNotificationsVisibility] = useState(false);

  const [unReadCount, setUnReadCount] = useState(0);

  useEffect(() => {
    getNotifications(userId);
  }, []);

  useEffect(() => {
    setUnReadCount(
      notifications.filter((notification) => !notification.IsRead).length
    );
  }, [notifications]);

  const openIncidentDetails = (incidentId) => {
    removeIncidentData(); 
    setTimeout(() => {
      navigation.navigate("IncidentDetails", { Id: incidentId });
    }, 0);
    
    setNotificationsVisibility(false);
  }

  return (
    <View style={styles.container}>
    <Receiver />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.btns}>        
        <Text style={styles.username}>
          {user_Name
            .split(" ")
            .reduce((initials, value) => (initials += value.slice(0, 1)), "")}
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setNotificationsVisibility(true)}
        >
          <MaterialIcons name="notifications-none" size={24} color="white" />
          <Text style={styles.notificationText}>{unReadCount} new</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => signOut()}>
          <MaterialIcons name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        visible={notificationsVisibility}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setNotificationsVisibility(false);
        }}
      >
        <Notifications showModal={setNotificationsVisibility} openIncidentDetails = {openIncidentDetails} />
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
  return{
      notifications: state.notifications.notifications,
      user_Name :state.userLogin.user_Name,
      userId :state.userLogin.userId,
      userLogin : state.userLogin.userLogin,
      loginError : state.userLogin.loginError,
      token : state.userLogin.token  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    getNotifications: (userid) => dispatch(getAllNotifications(userid)),   
    removeIncidentData: (userid) => dispatch(removeIncidentData()),   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
  },
  title:{
     // marginLeft:70,
  },
  titleText:{
     color:'white',
     fontSize:20,
     fontWeight:'bold',
     
  },
  btns:{
      flexDirection:'row',
      flex:0.6,
      justifyContent:'space-between',
      alignItems:'center'
  },
  btn:{
      flexDirection:'row',
      alignItems:'center'
  },
  notificationText:{
      color:'white',
      fontSize:10,
      backgroundColor:'#d90166',
      borderWidth:1,
      borderColor:'#d90166',
      borderRadius:5,
      paddingVertical:3,
      paddingHorizontal:4,
  },
  username:{
      color:'white',
      backgroundColor:'#c65102',
      paddingHorizontal:8,
      paddingVertical:5,
      borderRadius:15
  },
});