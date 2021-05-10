import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import { Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 


 const IncidentTitle = (props) => {
    const [editAble, setEditAble] = useState(false);
    return (
      <View>
        {
        editAble ?
         (
          <View style={styles.titleArea}>
            <Input placeholder="Enter new Title"  />
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
        ) : 
        (
          <View style={styles.titleArea}>
            <Text style={styles.title}>
              Title will go here in case of long tile there will be space
              available below
              <TouchableOpacity onPress={() => setEditAble(!editAble)}>
                <Feather name="edit-2" size={24} color="black" />
              </TouchableOpacity>
            </Text>
            <Text style={styles.timestamp}>
              {" "}
              Created by {"Ali Raza"} 7 days ago
            </Text>
          </View>
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
        borderBottomWidth:0.5
    },
    title :{
        textAlign:'left',
        color:'#1A237E',
        fontSize:18
    },
    timestamp :{
      marginTop:5,
        textAlign:'right',
        fontSize:10,
        color:'#848B98',
    }, 

});