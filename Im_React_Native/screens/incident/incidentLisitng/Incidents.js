import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import Incident from './Incident';
import AddIncident from '../AddIncident';
import Pagination from './Pagination';
import { connect } from 'react-redux'
import { allUsers } from "../../../store/actions/usersActions";
import { incidentsWithPage, cancel } from "../../../store/actions/incidentsActions";
import PageSizeDropDown from './PageSizeDropDown';


function Incidents(props) {
  const [incidentModelVisibility, setIncidentModelVisibility] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [Search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const {navigation} = props;

  useEffect(() => {
    props.getAllAssignees();      
  }, []);


    useEffect(() => {
      const parameters = {
        PageNumber: PageNumber,
        PageSize: PageSize,
        Search: Search, 
      };
      setLoading(true);
      props.incidentsWithPage(parameters);
      setLoading(false);
      return () => {
        cancel(); // cancel axios
      };
    }, [PageNumber, PageSize, Search]);
  
    const searchTextChange = (text) => {
      setSearch(text);
      setPageNumber(1);
    };

    const addNewClick = ()=>{
      const data = false;
      props.dispatch({ type: 'NEW_INCIDENT_STATUS', data }); // to clear all previous state
      setIncidentModelVisibility(true)
    }
    
    const getUserNameById = (id) => {   
      let user = props.allAssignees.find((assignee) => {
        return assignee.Id === id;
      });   
      if(!user){    
        return id;
      }
      return user.FirstName + " " + user.LastName
    }

    const paginationChanged = (pageNumber, PageSize)=>{
      setPageNumber(pageNumber),
      setPageSize(PageSize);
    }

    if(props.Error!==""){
      return (
        <View>
          <Text>Error</Text>
          <Text>{props.Error}</Text>
          <Text>Please check your network and try loging back.</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addIncidentBtn} onPress={addNewClick}>
          <MaterialIcons name="add" size={24} color="#1A237E" />
          <Text style={styles.addIncidentText}>New Incident</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          visible={incidentModelVisibility}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIncidentModelVisibility(!incidentModelVisibility);
          }}
        >
          <AddIncident hideModal={setIncidentModelVisibility} />
        </Modal>

        <Input
          inputStyle={styles.searchBox}
          placeholder="Search by title or description"
          leftIcon={<FontAwesome name="search" size={24} color="#1A237E" />}
          onChangeText={(val) => searchTextChange(val)}
        />
        {/*    <TouchableOpacity style={styles.buttonBox} onPress={()=>screenProps.login(false)} >
                   </TouchableOpacity>           
        </View> */}
        <View style={{}}>
          <Pagination
            TotalRecords={props.TotalIncidents}           
            search={Search}
            paginationChanged={paginationChanged}
          />
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          {props.Incidents.map((incident) => {
            return (
              <Incident
                navigation={navigation}
                key={incident.Id}
                incident={incident}
                getUserNameById={getUserNameById}
              />
            );
          })}
        </ScrollView>
      </View>
    );
}

const mapStateToProps = (state) => {
  return{
      allAssignees: state.users.users,
      Incidents : state.incidents.Incidents,
      TotalIncidents : state.incidents.TotalIncidents,
      Error : state.incidents.IncidentsError   // if there is an error while getting data from API
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      incidentsWithPage: (parameters) => dispatch(incidentsWithPage(parameters)),
      getAllAssignees: () => dispatch(allUsers()),
      dispatch:dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);

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
    addIncidentBtn:{
      flexDirection:'row',
      alignSelf: 'stretch',
      alignItems : 'center',
      justifyContent:'flex-end',
      marginRight:10,   
    },
    addIncidentText:{
      fontSize:17,
      fontWeight:'bold',
      color:'#1A237E',
    },
    searchBox :{
        fontSize:15,
        backgroundColor:'white'
    },
    btnContainer:{
        alignSelf: 'stretch',        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonBox:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{      
        fontSize:18,
        color:'green'
    }

});
