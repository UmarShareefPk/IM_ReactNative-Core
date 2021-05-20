import React,{useState} from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Feather, FontAwesome5, MaterialIcons,  } from '@expo/vector-icons'; 
import { withTheme } from 'react-native-elements';
import Notifications from '../notification/Notifications';
import { Tooltip  } from 'react-native-elements';
import { signOut } from "../../store/actions/userLoginActions";
import { connect } from 'react-redux'

const Header = ({title, signOut, user_Name}) => {
    const [notificationsVisibility, setNotificationsVisibility] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.btns}>
          {/* <Tooltip backgroundColor="#1A237E" popover={<Text style={{color:'white', padding:3,}}>Welcome Umar Shareef!</Text>}>
           
          </Tooltip> */}
          <Text style={styles.username}>
            {user_Name.split(' ').reduce((initials,value)=> initials+=value.slice(0,1) , "")}
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setNotificationsVisibility(true)}
          >
            <MaterialIcons name="notifications-none" size={24} color="white" />
            <Text style={styles.notificationText}>5 new</Text>
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
          <Notifications showModal={setNotificationsVisibility} />
        </Modal>
      </View>
    );
}

const mapStateToProps = (state) => {
  return{
      user_Name :state.userLogin.user_Name,
      userId :state.userLogin.userId,
      userLogin : state.userLogin.userLogin,
      loginError : state.userLogin.loginError,
      token : state.userLogin.token  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
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