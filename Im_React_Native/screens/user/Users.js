import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import User from './User'
 import AddUser from './AddUsert';
import Pagination from '../shared/pagination/Pagination';
import { userssWithPage } from "../../store/actions/usersActions";
import { connect } from 'react-redux'




function Users(props) {
  const [addUserModelVisibility, setAddUserModelVisibility] = useState(false);
  const [PageNumber, setPageNumber] = useState(1);
  const [PageSize, setPageSize] = useState(5);
  const [Search, setSearch] = useState("");

  const { navigation } = props;

  useEffect(() => {
    loadUsers();
  }, [PageNumber, PageSize, Search]);

  const loadUsers = () => {
    const parameters = {
      PageNumber: PageNumber,
      PageSize: PageSize,
      Search: Search,
    };
    props.userssWithPage(parameters);
  };

  const searchTextChange = (text) => {
    setSearch(text);
    setPageNumber(1);
  };

  const addNewClick = () => {
    const data = false;
    setAddUserModelVisibility(true)
  };

  const paginationChanged = (pageNumber, PageSize) => {
    setPageNumber(pageNumber), setPageSize(PageSize);
  };

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addUserBtn} onPress={addNewClick}>
        <MaterialIcons name="add" size={24} color="#1A237E" />
        <Text style={styles.addUserText}>New User</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={addUserModelVisibility}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setAddUserModelVisibility(!addUserModelVisibility);
        }}
      >
        <Text>New User</Text>
        <AddUser showModal={setAddUserModelVisibility} reloadUsers={loadUsers} />
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
          return <User navigation={navigation} key={user.Id} user={user} />;
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
    addUserBtn:{
      flexDirection:'row',     
      alignItems : 'center',
      justifyContent:'flex-end',
      marginRight:10,  
      width:120, 
    },
    addUserText:{
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
