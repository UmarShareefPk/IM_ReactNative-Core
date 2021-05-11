import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import { Input, FAB, Button  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 


 const IncidentTitle = (props) => {
    const [editAble, setEditAble] = useState(false);
    return (
      <View>
        {editAble ? (
          <View style={styles.titleArea}>
            <Input placeholder="Enter new Title" />
            <View style={styles.editbtnsBox}>
              <FAB
                title="Cancel"
                color="orange"
                onPress={() => setEditAble(false)}
                icon={<MaterialIcons name="cancel" size={30} color="white" />}
              />
              <FAB
                title="Save"
                style={{ marginLeft: 10 }}
                color="green"
                icon={<FontAwesome5 name="save" size={30} color="white" />}
              />
            </View>
          </View>
        ) : (
          <>
            <View style={styles.titleArea}>
              <Text style={styles.title}>
                Title will go here in case of long tile there will be space
                available below                
              </Text>
              <View style={styles.titleEdit}>
                <Text style={styles.timestamp}>
                  Created by {"Ali Raza"} 7 days ago 1
                </Text>
                <Button
                  onPress={() => setEditAble(!editAble)}
                  title=""
                  width="25"
                  buttonStyle={styles.editBtn}
                  icon={<Feather name="edit-2" size={20} color="#1A237E" />}
                />
              </View>
            </View>
          </>
        )}
      </View>
    );
  }

  export default IncidentTitle;

  const styles = StyleSheet.create({ 
    titleArea:{
      width: Dimensions.get('window').width , 
        alignSelf:'stretch',
        padding:15,
       // flexDirection:'row',
       // marginHorizontal:10
       // borderBottomWidth:0.5
    },
    title :{
        textAlign:'left',
        color:'#1A237E',
        fontSize:18
    },
    titleEdit:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    timestamp :{
      marginTop:5,
        textAlign:'right',
        fontSize:11,
        color:'#848B98',
    }, 
    editBtn:{
      color:'red',
     // backgroundColor:'#1A237E',
      backgroundColor:'white',
     // width:50,
      textAlign:'right'
     // marginTop:5
  },
    editbtnsBox: {
      flexDirection: "row",
      justifyContent: "center",
    },
});