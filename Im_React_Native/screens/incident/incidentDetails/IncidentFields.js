import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';

import AssigneeDropDown from '../../shared/AssigneeDropdown';
import DateTimePicker from "../../shared/DateTimePicker";
import StatusDropDown from "../../shared/StatusDropDown";

const IncidentFields = (props) => {
  const [editAble, setEditAble] = useState(false);
 
    return (
      <>
        <View>
          {editAble ? <EditAbleFields /> : <StaticFields />}
        </View>
        <View style={styles.editBtnContainer}>
          <Button
            onPress={() => setEditAble(!editAble)}
            title=""
            width="25"
            buttonStyle={styles.editBtn}
            icon={<Feather name="edit-2" size={20} color="#1A237E" />}
          />
        </View>
      </>

    );
  }

  const StaticFields = () =>{
    return (
      <View style={styles.topContainer}>
      <View style={styles.fieldContainer}>
        <Text style={styles.field}>
          Status: <Text style={styles.fieldValue}>New</Text>
        </Text>
        <Text style={styles.field}>
          Due Date: <Text style={styles.fieldValue}>In 2 Days</Text>
        </Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.field}>
          Assigned To: <Text style={styles.fieldValue}>Umar Shareef</Text>
        </Text>

        <Text style={styles.field}>
          Start Date: <Text style={styles.fieldValue}>In 2 Days</Text>
        </Text>
      </View>
    </View>
    )
  }

  const EditAbleFields = () =>{
    const [status, setStatus] = useState('I');
    const [assginee, setAssginee] = useState('1');  
    return (
      <View style={styles.topContainerEdit}>   
        <StatusDropDown selectedStatus={status} statusChanged={setStatus} />     
        <AssigneeDropDown selectedAssignee={assginee} assigneeChanged={setAssginee} />
        <DateTimePicker label={"Start Time"} datetime={"Jan 12, 2020 5:30 PM"} />
        <DateTimePicker label={"Due Date"} datetime={"Dec 31, 2021 5:30 PM"} />
       </View>
    )
  }

  export default IncidentFields;

  const styles = StyleSheet.create({
    topContainer:{
      width: Dimensions.get("window").width,  
      flexDirection:'row',
      justifyContent:'space-around',      
    },
    fieldContainer:{  
        paddingHorizontal:20,
        marginVertical:5,
        flexDirection:'column',
    },
    field:{
       color:'#1A237E',
        fontSize:14,       
    },
    fieldValue:{
        color:'#848B98',
    },
    editBtnContainer:{ 
      width: Dimensions.get("window").width,
      flexDirection: "row", 
      justifyContent: "flex-end" 
    },
    editBtn:{
      marginEnd:15,
      backgroundColor:'white',
    },    

    topContainerEdit:{
      width: Dimensions.get("window").width - 30,  
      flexDirection:'column',
      justifyContent:'center',  
    },
});
