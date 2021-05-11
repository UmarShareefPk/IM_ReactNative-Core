import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const IncidentFields = (props) => {
    return (
      <View>
      <View style={{flexDirection:'row'}}>
        <View style={styles.fields}>
          <Text style={styles.field}>
            Status: <Text style={styles.fieldValue}>New</Text>
          </Text>
          <Text style={styles.field}>
            Due Date: <Text style={styles.fieldValue}>In 2 Days</Text>
          </Text>
        </View>

        <View style={styles.fields}>
          <Text style={styles.field}>
            Assigned To: <Text style={styles.fieldValue}>Umar Shareef</Text>
          </Text>

          <Text style={styles.field}>
            Start Date: <Text style={styles.fieldValue}>In 2 Days</Text>
          </Text>
        </View>
</View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button
            onPress={() => setEditAble(!editAble)}
            title=""
            width="25"
            buttonStyle={styles.editBtn}
            icon={<Feather name="edit-2" size={13} color="white" />}
          />
        </View>
      </View>
    );
  }

  export default IncidentFields;

  const styles = StyleSheet.create({
    
    fields:{   
        alignSelf:'stretch',
        paddingHorizontal:31,
        marginVertical:5,
        flexDirection:'column',
      //  justifyContent:'space-between' ,
      //  width: Dimensions.get('window').width  
    },
    field:{
       color:'#1A237E',
        fontSize:12,
        //fontWeight:'bold'
    },
    fieldValue:{
        color:'#848B98',
        //cfontWeight:'bold'
    },
    editBtn:{
      marginEnd:10,
      backgroundColor:'#1A237E',
    },

    
});
