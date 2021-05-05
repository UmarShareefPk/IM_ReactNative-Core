import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions } from 'react-native';
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons   } from '@expo/vector-icons'; 

export default function IncidentDetails(props) {
    //const width1 = Dimensions.get('window').width; //full width
    const id = props.navigation.getParam('Id');
    const [descriptionEdit, setDescriptionEdit] = useState(false);
    //console.log(props);
    return (
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Text style={styles.title}>
            Title will go here in case of long tile there will be space
            available below
          </Text>
          <Text style={styles.timestamp}>
            {" "}
            Created by {"Ali Raza"} 7 days ago
          </Text>
        </View>
        {/*............................ Fields  ................................................*/}
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

        {/*............................ Description  ................................................*/}
        <View style={styles.descriptionBox}>
          <Text style={{ fontWeight: "bold", marginLeft:5 }}>
            Description 
            <TouchableOpacity onPress={()=> setDescriptionEdit(!descriptionEdit)}>
                <Feather name="edit-2" size={18} color="black" />
            </TouchableOpacity>
          </Text>
          {descriptionEdit ? (
            <View style={styles.editBox}>
                
              <Input placeholder="Enter new description" multiline={true} />
              
              <View style={styles.editbtnsBox}>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={30} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                  <FontAwesome5 name="save" size={30} color="green" />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.editBox}>
              <Text style={{ color: "gray", fontSize: 13 }}>
                Description here. All the Expo apps do share the exact same
                native runtime (RN + ExpoKit), the only difference is the JS
                that we give them. ... Actually as the Expo SDK can be upgraded,
                the Expo client includes a compatibility layer so that it is
                able to run the last 5 SDK versions
              </Text>
            </View>
          )}
        </View>
    
 {/*............................ Additional Data  ................................................*/}

        {/* end of container below*/}
      </View>
    );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#fff',
        marginTop:0,
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems : 'center'
    },
    titleArea:{
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
        textAlign:'right',
        fontSize:10,
        color:'#848B98',
    },
    descriptionAndFields:{
        alignSelf: 'stretch',        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        borderBottomWidth:0.5
    },
    fields:{   
        alignSelf:'stretch',
        paddingHorizontal:20,
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'    
    },
    field:{
       color:'black',
        fontSize:13
    },
    fieldValue:{
        color:'#848B98',
        fontWeight:'bold'
    },
    descriptionBox:{      
       padding:10,         
       borderBottomWidth:0.5  
    },
    editBox:{
        padding:10, 
        width: Dimensions.get('window').width
    },
    editbtnsBox:{
        flexDirection:'row',
        justifyContent:"center"
    }

});
