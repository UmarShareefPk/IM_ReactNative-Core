import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';

const IncidentDescription = ({type}) => {
 
    const [editAble, setEditAble] = useState(false);
    const [currentValue, setCurrentValue] = useState(`  Description here. All the Expo apps do share the exact same native runtime (RN + ExpoKit), the only difference is the JS that we give
    them. ... Actually as the Expo SDK can be upgraded, the Expo client  includes a compatibility layer so that it is able to run the last 5  SDK versions`);
    const [newValue, setNewValue] = useState("");
  
    const update = () =>{
      setEditAble(false);
      setCurrentValue(newValue);
    }
  
    return (
      <View style={styles.descriptionBox}>
      
        <View style={styles.title}>
          <Text style={styles.titleText}>
            {type == "description" ? "Description" : "Additional Details"}
          </Text>
          <Button
            onPress={() => setEditAble(!editAble)}
            title=""
            buttonStyle={styles.editBtn}            
            icon={<Feather name="edit-2" size={13} color="white" />}
          />
        </View>

        {editAble ? (
          <View style={styles.editBox}>
            <Input
              placeholder="Enter new description"
              multiline={true}
              onChangeText={(v) => setNewValue(v)}
            />

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
                onPress={() => update()}
                icon={<FontAwesome5 name="save" size={30} color="white" />}
              />
            </View>
          </View>
        ) : (
          <View style={styles.editBox}>
            <Text style={styles.descriptionText}>{currentValue}</Text>
          </View>
        )}
      </View>
    );
  }
  

export default IncidentDescription;

const styles = StyleSheet.create({
  descriptionBox: {   
    borderBottomWidth: 0.5,
  },
  title :{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:20,
      marginTop:5
  },
  titleText:{
      fontWeight:'bold',
      color:'#1A237E',
  },
  descriptionText: {
    padding: 0,
    paddingRight:30,
    color: "gray",
    fontSize: 13,
    textAlign: "center",
    width: Dimensions.get("window").width,
  },
  editBtn:{     
    backgroundColor:'#1A237E',     
  },
  editBox: {
    padding: 10,
    width: Dimensions.get("window").width,
  },
  editbtnsBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
