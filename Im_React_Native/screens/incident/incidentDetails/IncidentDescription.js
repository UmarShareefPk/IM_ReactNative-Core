import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
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
        <TouchableOpacity onPress={() => setEditAble(!editAble)}>
          <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
           {type =='description' ? "Description" : "Additional Details"} 
            <Feather name="edit-2" size={20} color="black" />
          </Text>
        </TouchableOpacity>
  
        {editAble ? (
          <View style={styles.editBox}>
            <Input placeholder="Enter new description" multiline={true} onChangeText ={(v) => setNewValue(v) } />
  
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
            <Text style={styles.descriptionText}>
              {currentValue}
            </Text>
          </View>
        )}
      </View>
    );
  }
  

export default IncidentDescription;

const styles = StyleSheet.create({
  descriptionBox: {
    padding: 10,
    borderBottomWidth: 0.5,
  },
  descriptionText: {
    padding: 10,
    color: "gray",
    fontSize: 13,
    textAlign: "center",
    width: Dimensions.get("window").width,
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
