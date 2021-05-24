import React,{useState, useEffect} from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import Notification from './Notification'
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { connect } from 'react-redux';

const Notifications = ({
  showModal,
  notifications,  
}) => {     

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => showModal(false)}
        >
          <MaterialIcons name="close" size={15} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {notifications.map((noti, index) => {
            if(index > 15) return;
          return <Notification notification={noti} />;
        })}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications.notifications,
    userId: state.userLogin.userId, // logged in User Id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    btnContainer:{     
       flexDirection:'row',
       justifyContent:'flex-end',
       alignItems:'center',
    },
    closeBtn:{      
        width:30, 
        marginHorizontal:20,
        marginVertical:5,
        borderRadius:15, 
        padding:5,      
        backgroundColor:'red',
        justifyContent:'flex-end',
        alignItems:'center',

    },
 
});