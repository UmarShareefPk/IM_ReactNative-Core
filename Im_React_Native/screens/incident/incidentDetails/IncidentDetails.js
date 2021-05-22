import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';
import IncidentTitle from './IncidentTitle';
import IncidentFields from './IncidentFields';
import IncidentDescription from './IncidentDescription';
import IncidentAttachments from './IncidentAttachments';
import Comments from '../comments/Comments';
import { connect } from "react-redux";
import { allUsers } from "../../../store/actions/usersActions";
import { getIncidentById, updateIncident, deleteAttachment } from "../../../store/actions/incidentsActions";


function IncidentDetails(    { 
  navigation,     
  incidentData,
  getIncidentById,
  allAssignees,
  getAllAssignees,
  userId,
  updateIncident,
  deleteAttachment,
  IncidentDetailError      
}
) {   
  
    useEffect(() => {    
      console.log("avigation.getParam('Id')", navigation.getParam('Id'));
     let id = navigation.getParam('Id');
        getIncidentById(id);   
    }, [navigation.getParam('Id')]); // whenever Id changes get new
        
    const getUserNameById = (id) => {   
      let user = allAssignees.find((assignee) => {
        return assignee.Id === id;
      });   
      if(!user){    
        return id; 
      }
      return user.FirstName + " " + user.LastName
    }

    const statusName = (status) => {
      switch (status) {
        case "N":
          return "New";
        case "C":
          return "Closed";
        case "A":
          return "Approved";
        case "I":
          return "In Progress";
        default:
          return status;
      }
    };

    const tabs = ['Details',  'Comments'];
    const [selectedTab, setSelectedTab] = useState(0);

    const tabChanged = (selectedIndex) => {
      setSelectedTab(selectedIndex);
    }
    
  const renderByTab = () => {
    let tab = selectedTab;   
    if (tab == 0)
      return (
        <>
       <ScrollView>
          <IncidentDescription type="description" />
          <IncidentDescription type="addtionalData" />
          <IncidentAttachments />
          </ScrollView>
        </>
      )
    else if (tab == 1)
      return (<Comments />) 
  }

  if(!incidentData)
    return(<Text style={styles.loading}>Loading...</Text>)

    return (
      <View style={styles.container}>
        
        <IncidentTitle getUserNameById={getUserNameById}  />
        <IncidentFields  getUserNameById={getUserNameById} statusName={statusName} />
        <ButtonGroup
          onPress={tabChanged}
          selectedIndex={selectedTab}
          buttons={tabs}
          containerStyle={{ height: 30, backgroundColor:'white'}}
          textStyle={{color:'#1A237E'}}
          selectedButtonStyle = {{backgroundColor:'#1A237E'}}        
         //innerBorderStyle = {{width:2, color:'white'}}
         
        />

      {renderByTab()}

      </View>
    );
}

const mapStateToProps = (state) => {
  return {
    allAssignees: state.users.users,
    incidentData: state.incidents.IncidentSelected,
    userId :state.userLogin.userId,  // logged in User Id  
    IncidentDetailError : state.incidents.IncidentDetailError     // if api ERROR
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAssignees: () => dispatch(allUsers()),
    getIncidentById: (incidentId) => dispatch(getIncidentById(incidentId)), 
    updateIncident: (parameters) => dispatch(updateIncident(parameters)),   
    deleteAttachment : (type, userid, incidentId , file) => dispatch(deleteAttachment(type, userid, incidentId ,file))    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncidentDetails);


const styles = StyleSheet.create({
    container :{
       backgroundColor:'#fff',
        marginTop:0,
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems : 'center'
    },
    loading: {
      marginTop: 50,
      color: "#efe",
      textAlign: "center",
      fontSize: 30,
    },
});
