import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { Feather, FontAwesome, MaterialIcons,    } from '@expo/vector-icons';

const DateTimePicker = ({label , datetime, datetimeChanged}) =>{

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(datetime)

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    datetimeChanged(date);
    hideDatePicker();

  };
 
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLable}>{label}</Text>
     
      <TouchableOpacity onPress={showDatePicker}  style={styles.datetimeBox}>
        <Text style={styles.datetimeText}>{moment(date).format("MMMM DD YYYY, h:mm a")}</Text>
        <FontAwesome name="calendar" size={20} color="#1A237E" />
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    //paddingHorizontal:30,
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
  datetimeBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    borderRadius:7,
    paddingHorizontal:10,
    paddingVertical:12,
    width:220,
    color:'#1A237E',
    textAlign:'left'
  },
  datetimeText:{
  
    color:'#1A237E',
    textAlign:'left'
  },  
});