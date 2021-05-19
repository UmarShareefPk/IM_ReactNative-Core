import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons'; 
import { connect } from 'react-redux'
import { logIn } from '../store/actions/userLoginActions';


 function Login(props) {

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');

  function loginClick() {
    let credentials = {
      username,
      password
    };
    props.logIn(credentials);   
  }

    return (
      <View style={styles.container}>
        <Text style={{fontSize:30, color:'red'}}>{username +  " lalalal" + password}</Text>
        <Text style={styles.welcomeText}>Welcome! {props.user_Name}</Text>
        <Text style={styles.loginText}>Please Login.</Text>
        <View style={styles.loginContainer}>
          <Input
            placeholder="Enter username"
            leftIcon={<Icon name="user" size={24} color="#1A237E" />}
            onChangeText={(val)=> setUsername(val)}
          />
          <Input 
            placeholder="Enter password" secureTextEntry={true}
            leftIcon={<MaterialIcons name="security" size={24} color="#1A237E" />}
            onChangeText={(val)=> setPassword(val)}
          />
          {props.loginError ? 
          (<Text style={styles.loginErrorText}>Incorrect username or password.</Text>) 
          : 
          null}
               
       
         <FAB title="Login" color="#1A237E" onPress={() => loginClick()}  />
        </View>
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
      logIn: (creds) => dispatch(logIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container :{
        marginTop:100,
        padding:20,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    loginContainer:{
        marginTop : 30,
    },
    welcomeText:{
        textAlign:'center',
        fontSize:40,
        padding:5,
        color:"#1A237E"
    },
    loginText:{
        fontSize:15,
        padding:6,
    },
    loginErrorText:{
        padding:5,
        marginBottom:5,
        color : 'red'
    },
  
});
