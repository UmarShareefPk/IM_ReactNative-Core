import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';

const IncidentFields = (props) => {
  const [editAble, setEditAble] = useState(false);
 
    return (
      <View>
        {editAble? <EditAbleFields /> : <StaticFields /> }
        
        
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              onPress={() => setEditAble(!editAble)}
              title=""
              width="25"
              buttonStyle={styles.editBtn}
              icon={<Feather name="edit-2" size={20} color="#1A237E" />}
            />
        </View>

      </View>
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
         
       </View>
    )
  }

  const StatusDropDown = ({selectedStatus, statusChanged}) =>{

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(selectedStatus);
    const [items, setItems] = useState([
        { label: 'New', value: 'N' },
        { label: 'In Progress', value: 'I' },
        { label: 'Closed', value: 'C' },
        { label: 'Approved', value: 'A' }
    ]);   
   
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLable}>Status</Text>
        <DropDownPicker
                searchable={false}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={statusChanged}
                containerStyle={styles.dropdownDropDownStyle}
                textStyle={styles.textStyle}
            />     
       </View>
    )
  }

  const AssigneeDropDown = ({selectedAssignee, assigneeChanged}) =>{

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(selectedAssignee);
    const [items, setItems] = useState([
        { label: 'Umar Shareef', value: '1' },
        { label: 'Qamar Shareef', value: '2' },
        { label: 'Ali Raza', value: '3' },
        { label: 'Kaka Khan', value: '4' }
    ]);   
   
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLable}>Assingeed To</Text>
        <DropDownPicker
                searchable={true}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={assigneeChanged}
                containerStyle={styles.dropdownDropDownStyle}
                textStyle={styles.textStyle}
            />     
       </View>
    )
  }

  export default IncidentFields;

  const styles = StyleSheet.create({
    topContainer:{
      width: Dimensions.get("window").width,  
      flexDirection:'row',
      justifyContent:'center',      
    },
    fieldContainer:{  
        paddingHorizontal:20,
        marginVertical:5,
        flexDirection:'column',
    },
    field:{
       color:'#1A237E',
        fontSize:12,       
    },
    fieldValue:{
        color:'#848B98',
    },
    editBtn:{
      marginEnd:15,
      backgroundColor:'white',
    },    

    topContainerEdit:{
      width: Dimensions.get("window").width,  
      flexDirection:'column',
      justifyContent:'center',      
    },
  ///// Status//
  dropdownContainer:{
    width: Dimensions.get("window").width,  
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:30,
    marginVertical:3
    
  },
  dropdownDropDownStyle:{
      width:230,      
  },
  textStyle:{
    fontSize:15,
    color:'#1A237E',
  },
  statusLable:{
    fontSize:17,
    color:'#1A237E',
  },
  // end status
});
