import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../screens/shared/Header'
import Incidents from '../screens/incident/incidentLisitng/Incidents';

import IncidentDetails from '../screens/incident/incidentDetails/IncidentDetails';

const screens = {

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
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Details' navigation={navigation} />
      }
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


