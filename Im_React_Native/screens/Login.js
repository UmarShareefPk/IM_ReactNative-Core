import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Login({setLoginStatus}) {

    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.loginText}>Please Login.</Text>
        <View style={styles.loginContainer}>
          <Input
            placeholder="Enter username"
            leftIcon={<Icon name="user" size={24} color="#1A237E" />}
          />
          <Input 
            placeholder="Enter password" secureTextEntry={true}
            leftIcon={<MaterialIcons name="security" size={24} color="#1A237E" />}
          />
          <Text style={styles.loginErrorText}>Incorrect username or password.</Text>
          {/* <Button title="Login" buttonStyle={styles.loginBtn} color="#1A237E" onPress={() => setLoginStatus(false)} /> */}
       
         <FAB title="Login" color="#1A237E" onPress={() => setLoginStatus(true)}  />
        </View>
      </View>
    );
}

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
