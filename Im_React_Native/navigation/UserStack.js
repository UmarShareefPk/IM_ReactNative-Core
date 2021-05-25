import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../screens/shared/Header'
import Users from '../screens/user/Users';



const screens = {

  Incidents : {
    screen : Users,
      navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Users' navigation={navigation} />
      }
    },
  },
  // IncidentDetails : {
  //   screen : IncidentDetails,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       headerTitle: () => <Header title='Details' navigation={navigation} />
  //     }
  //   }
  // } 
};

// home stack navigator screens
const UserStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#1A237E', height: 80 }
  }
});

export default UserStack;


