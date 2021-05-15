import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DateTimePicker = ({label , datetime, datetimeChanged}) =>{

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
 
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLable}>{label}</Text>
     
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.datetimeBox}>{datetime}</Text>
      </TouchableOpacity>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
     </View>
  )
}

export default DateTimePicker;


const styles = StyleSheet.create({ 
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
  dropdownLable:{
    fontSize:15,
    color:'#1A237E',
  },
  datetimeBox:{
    borderWidth:1,
    borderRadius:7,
    paddingHorizontal:10,
    paddingVertical:12,
    width:230,
    color:'#1A237E',
    textAlign:'left'
  },
});