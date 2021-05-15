import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../screens/shared/Header'
import Incidents from '../screens/incident/Incidents';
import Incident from '../screens/incident/Incident';
import IncidentDetails from '../screens/incident/incidentDetails/IncidentDetails';

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
      navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Incidents' navigation={navigation} />
      }
    },
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
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#1A237E', height: 80 }
  }
});

export default IncidentStack;


