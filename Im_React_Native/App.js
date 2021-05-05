import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Navigator from './navigation/drawer';

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  if (loginStatus) return <Navigator />;
  else return <Login setLoginStatus = {setLoginStatus} />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
