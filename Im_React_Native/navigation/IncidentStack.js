import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
// import Header from '../shared/header';
// import Home from '../screens/home';

import Incidents from '../screens/incident/Incidents';
import Incident from '../screens/incident/Incident';
import IncidentDetails from '../screens/incident/IncidentDetails';

const screens = {
  // Home: {
  //   screen: Home,
  //   navigationOptions: ({ navigation }) => {
  //     return {
  //       headerTitle: () => <Header title='GameZone' navigation={navigation} />
  //     }
  //   },
  // },
  Incidents : {
    screen : Incidents,
    navigationOptions :{
      title : "Incidents",
    }
  },
  IncidentDetails : {
    screen : IncidentDetails,
    navigationOptions :{
      title : "Details",
    }
  } 
};

// home stack navigator screens
const IncidentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default IncidentStack;


