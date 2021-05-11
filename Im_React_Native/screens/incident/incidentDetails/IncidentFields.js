import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';

const IncidentFields = (props) => {
    return (
      <View>
        <View style={styles.fields}>
          <Text style={styles.field}>
            Status: <Text style={styles.fieldValue}>New</Text>
          </Text>
  
          <Text style={styles.field}>
            Assigned To: <Text style={styles.fieldValue}>Umar Shareef</Text>
          </Text>
  
        </View>
  
        <View style={styles.fields}>
  
          <Text style={styles.field}>
            Due Date: <Text style={styles.fieldValue}>In 2 Days</Text>
          </Text>
  
          <Text style={styles.field}>
            Start Date: <Text style={styles.fieldValue}>In 2 Days</Text>
          </Text>
  
        </View>
      </View>
    );
  }

  export default IncidentFields;

  const styles = StyleSheet.create({
    
    fields:{   
        alignSelf:'stretch',
        paddingHorizontal:20,
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between' ,
        width: Dimensions.get('window').width  
    },
    field:{
       color:'#1A237E',
        fontSize:12
    },
    fieldValue:{
        color:'#848B98',
        //cfontWeight:'bold'
    },


    
});
