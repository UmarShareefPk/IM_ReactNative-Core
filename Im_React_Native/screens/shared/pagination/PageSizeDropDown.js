import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const PageSizeDropDown = ({pageSize,pageSizeChanged}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(pageSize);
    const [items, setItems] = useState([
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '20', value: 20 },
        { label: '30', value: 30 },
        { label: '40', value: 40 },
        { label: '50', value: 50 },
        { label: '100', value: 100 },
    ]);   
   
    const changed = (pSize) => {
      console.log(pSize);
      pageSizeChanged(pSize)
   
    }

    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLable}>Size</Text>
        <DropDownPicker
                searchable={false}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
               // dropDownDirection={'TOP'}
                onChangeValue={changed}
                containerStyle={styles.dropdownStyle}
                textStyle={styles.textStyle}
       
            />     
       </View>
    )
}

export default PageSizeDropDown



const styles = StyleSheet.create({ 
    dropdownContainer:{
     // position: 'absolute' ,
   //  elevation: 1,
   //width: Dimensions.get("window").width, 
   alignSelf:'stretch',
      flexDirection:'row',
      alignItems:'center',
    //  justifyContent:'center', 
      marginVertical:3
      
    },
    dropdownStyle:{
        width:80, 
        borderWidth:0
       // height:50,     
    },
    textStyle:{
      fontSize:15,
      color:'#1A237E',
    },
    dropdownLable:{
      fontSize:13,
      color:'#1A237E',
      marginHorizontal:5,
    },
    
  });