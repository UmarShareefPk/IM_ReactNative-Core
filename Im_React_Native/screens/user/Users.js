import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import User from './User'
// import AddIncident from '../AddIncident';
import Pagination from '../shared/pagination/Pagination';
import { userssWithPage } from "../../store/actions/usersActions";
import { connect } from 'react-redux'




function Users(props) {
  const [incidentModelVisibility, setIncidentModelVisibility] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [Search, setSearch] = useState("");


  const {navigation} = props;

    useEffect(() => {
      loadUsers();
      return () => {
       // cancel(); // cancel axios
      };
    }, [PageNumber, PageSize, Search]);
    
    const loadUsers = () =>{
      const parameters = {
        PageNumber: PageNumber,
        PageSize: PageSize,
        Search: Search, 
      };
       props.userssWithPage(parameters);     
    }

    const searchTextChange = (text) => {
      setSearch(text);
      setPageNumber(1);
    };

    const addNewClick = ()=>{
      const data = false;      
      setIncidentModelVisibility(true)
    }   


    const paginationChanged = (pageNumber, PageSize)=>{
      setPageNumber(pageNumber),
      setPageSize(PageSize);
    }

    // if(props.Error!==""){
    //   return (
    //     <View>
    //       <Text>Error</Text>
    //       <Text>{props.Error}</Text>
    //       <Text>Please check your network and try loging back.</Text>
    //     </View>
    //   );
    // }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addIncidentBtn} onPress={addNewClick}>
          <MaterialIcons name="add" size={24} color="#1A237E" />
          <Text style={styles.addIncidentText}>New User</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          visible={incidentModelVisibility}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIncidentModelVisibility(!incidentModelVisibility);
          }}
        >
          {/* <AddIncident hideModal={setIncidentModelVisibility} reloadIncidents={loadIncident} /> */}
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
            TotalRecords={props.TotalUsers}           
            search={Search}
            paginationChanged={paginationChanged}
          />
        </View>

        <ScrollView style={{ marginTop: 20 }}>
          {props.Users.map((user) => {
            return (
              <User
                navigation={navigation}
                key={user.Id}
                user={user}               
              />
            );
          })}
        </ScrollView>
      </View>
    );
}

const mapStateToProps = (state) => {
  return {
    Users: state.users.UsersList,
    TotalUsers: state.users.TotalUsers,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    userssWithPage: (parameters) => dispatch(userssWithPage(parameters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

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
