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

  export default IncidentFields;

  const styles = StyleSheet.create({
    topContainer:{
      width: Dimensions.get("window").width,  
      flexDirection:'row',
      justifyContent:'space-between',
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
});
