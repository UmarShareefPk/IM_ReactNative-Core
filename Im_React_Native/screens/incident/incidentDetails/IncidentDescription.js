import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { updateIncident } from "../../../store/actions/incidentsActions";
import { connect } from "react-redux";

const IncidentDescription = ({type, incidentData, updateIncident}) => {

    const [editAble, setEditAble] = useState(false);
    const [currentValue, setCurrentValue] = useState(type == "description"? incidentData.Description : incidentData.AdditionalData);
    const [newValue, setNewValue] = useState(type == "description"? incidentData.Description : incidentData.AdditionalData);
  
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
            icon={<Feather name="edit-2" size={20} color="#1A237E" />}
          />
        </View>

        {editAble ? (
          <View style={styles.editBox}>
            <Input
              placeholder="Enter new description"
              multiline={true}
              defaultValue={newValue}
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
  
  const mapStateToProps = (state) => {
    return {     
      incidentData: state.incidents.IncidentSelected,   
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {     
      updateIncident: (parameters) => dispatch(updateIncident(parameters)),  
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(IncidentDescription);



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
    backgroundColor:'white',     
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
