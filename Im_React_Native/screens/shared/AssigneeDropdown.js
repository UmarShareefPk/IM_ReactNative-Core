import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


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