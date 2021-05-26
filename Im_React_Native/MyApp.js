import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Navigator from './navigation/drawer';
import { connect } from 'react-redux';


function MyApp({token}) {

    
    if (token !==null && token !== undefined && token !=="")
        return <Navigator></Navigator>;
    //  return <Navigator screenProps={{ login: setLoginStatus }}></Navigator>;
    else {
      return <Login />;
    }
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

export default connect(mapStateToProps, null)(MyApp);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });