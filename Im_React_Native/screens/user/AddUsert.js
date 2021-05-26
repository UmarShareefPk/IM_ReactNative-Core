import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import * as DocumentPicker from 'expo-document-picker';
import { connect } from 'react-redux';
import { addNewUser } from '../../store/actions/usersActions';
import moment from "moment";

const AddUsert = ({showModal , addNewUser, reloadUsers}) => {
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  
  const [profilePic , setProfilePic] = useState(null);

  const [formError, setFormError] = useState("");
  const [selectedFilesCount, setSelectedFilesCount] = useState(0);

  const pickDocument = async () => {
    try{
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {    
        let { name, size, uri } = response;
        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType,
        };
        // console.log(fileToUpload, '...............file')
        setProfilePic( fileToUpload);
        setSelectedFilesCount(1);     
      }
    }).catch(err => console.log("ERROR in PICKING : ",err));
  }
  catch(ex){
    console.log("error in picking document", ex);
  }

  };


  const validateForm = () => {

    if(firstName === "" || lastName === "" || email === ""  || phone === "" )
        return false;
    return true;

   }

   const saveClick = () => {
       
    if(!validateForm()){
      setFormError("Please complete required fields before saving2.")
      return;
    }    
    setFormError("");   
   
    const formData = new FormData(); 

    if (profilePic) {
      formData.append("Attachment1", profilePic, profilePic.name);
    }
     formData.append("FirstName", firstName); 
     formData.append("LastName", lastName);
     formData.append("Email", email); 
     formData.append("Phone", phone); 
     addNewUser(formData);
     setTimeout(() => {
      showModal(false);
     }, 1000);
     reloadUsers();
    
  }; 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="add-comment" size={40} color="#1A237E" />
        <Text style={styles.headerText}>Add User</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Input
          placeholder="Type First Name"
          onChangeText={(v) => setFirstName(v)}
          inputStyle={{ fontSize: 18 }} 
          leftIcon={<Feather name="user" size={25} color="#1A237E" />}
        />
        <Input
          placeholder="Type Last Nmae"
          onChangeText={(v) => setLastName(v)}
          inputStyle={{ fontSize: 18 }}
          leftIcon={<Feather name="user" size={25} color="#1A237E" />}
        />
        <Input
          placeholder="Type Email"
          onChangeText={(v) => setEmail(v)}
          inputStyle={{ fontSize: 18 }}
          leftIcon={<MaterialIcons name="email" size={25} color="#1A237E" />}
        />
        <Input
          placeholder="Type Phone"
          onChangeText={(v) => setPhone(v)}
          inputStyle={{ fontSize: 18 }}
          leftIcon={<MaterialIcons name="local-phone" size={25} color="#1A237E" />}
        />

        <TouchableOpacity style={styles.selectFileBtn} onPress={pickDocument}>
          <MaterialIcons name="attachment" size={35} color="#1A237E" />
          <Text style={styles.selectFileText}>
            {selectedFilesCount > 0
              ? selectedFilesCount + " file selected"
              : "Select profile picture"}
          </Text>
        </TouchableOpacity>
      </View>
      {formError == "" ? null : (
        <Text style={styles.errorText}>{formError}</Text>
      )}

      <View style={styles.btnsBox}>
        <FAB
          title="Cancel"
          color="orange"
          onPress={() => showModal(false)}
          icon={<MaterialIcons name="cancel" size={30} color="white" />}
        />
        <FAB
          title="Save"
          style={{ marginLeft: 10 }}
          color="green"
          onPress={() => saveClick()}
          icon={<FontAwesome5 name="save" size={30} color="white" />}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {        
  return{
      allAssignees : state.users.users,
      user_Name :state.userLogin.user_Name, // Logged in User's name
      userId :state.userLogin.userId,  // logged in User Id       
  }
}

const mapDispatchToProps = (dispatch) => {
  return {       
      addNewUser : (formData) => dispatch(addNewUser(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUsert);

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
    container:{
        flex:1,
        justifyContent:'center',
        width: Dimensions.get("window").width-10, 
        marginTop:20,
        marginBottom:5,
        paddingHorizontal:10,
        paddingVertical:8,
        // borderWidth:0.5,
        // borderRadius:10,
        // borderStyle: 'dotted',
    },
    header:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:20,
       
    },
    headerText : {          
        paddingLeft:5,
        alignItems:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#1A237E',
    },
    selectFileBtn:{
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderColor:'gray',
      borderRadius:10,
      marginHorizontal:10,
      marginBottom:5,
    },
    selectFileText:{
      padding:5,
      color:'gray',
      fontSize:18

    },
    btnsBox:{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:40
    },
    errorText:{ 
      margin: 5, 
      textAlign: "center", 
      color: "red", 
      fontSize: 20 
    },
});
