import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


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
              zIndex={7000}
             // dropDownDirection={'TOP'}
              onChangeValue={statusChanged}
              containerStyle={styles.dropdownDropDownStyle}
              textStyle={styles.textStyle}
          />     
     </View>
  )
}


export default StatusDropDown;


const styles = StyleSheet.create({ 
  dropdownContainer:{
  
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    marginVertical:3
    
  },
  dropdownDropDownStyle:{
      width:230,      
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