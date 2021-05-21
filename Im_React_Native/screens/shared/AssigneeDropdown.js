import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AssigneeDropDown = ({selectedAssignee, assigneeChanged, allAssignees}) =>{

  const assigneeList = [];
  allAssignees.map((assignee)=>{
    assigneeList.push( { label: (assignee.FirstName + " " + assignee.LastName), value: assignee.Id });
  })

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(selectedAssignee);
    const [items, setItems] = useState(assigneeList);   
   
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
                zIndex={4000}
                onChangeValue={assigneeChanged}
                containerStyle={styles.dropdownDropDownStyle}
                textStyle={styles.textStyle}
            />     
       </View>
    )
  }

export default AssigneeDropDown;


const styles = StyleSheet.create({ 
  dropdownContainer:{    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
   // paddingHorizontal:30,
    marginVertical:3    
  },
  dropdownDropDownStyle:{
      width:220,      
  },
  textStyle:{
    fontSize:15,
    color:'#1A237E',
  },
  dropdownLable:{
    fontSize:15,
    color:'#1A237E',
  },
  
});