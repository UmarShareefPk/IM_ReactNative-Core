import React,{useState, useRef} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup, Tooltip  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import AssigneeDropDown from '../../shared/AssigneeDropdown';
import DateTimePicker from "../../shared/DateTimePicker";
import StatusDropDown from "../../shared/StatusDropDown";
import { updateIncident } from "../../../store/actions/incidentsActions";
import { connect } from "react-redux";
import moment from "moment";


const IncidentFields = ({incidentData, updateIncident, userId, getUserNameById, statusName}) => {
  const [editAble, setEditAble] = useState(false);
   
    return (
      <>
        <View>
          {editAble ? (
            <EditAbleFields
              incident={incidentData}
              getUserNameById={getUserNameById}
              updateIncident={updateIncident}
              userId={userId}
            />
          ) : (
            <StaticFields
              incident={incidentData}
              getUserNameById={getUserNameById}
              statusName={statusName}
            />
          )}
        </View>
        <View style={styles.editBtnContainer}>
          <Button
            onPress={() => setEditAble(!editAble)}
            title=""
            width="25"
            buttonStyle={styles.editBtn}
            icon={<Feather name="edit-2" size={20} color="#1A237E" />}
          />
        </View>
      </>
    );
  }

  const StaticFields = ({incident, getUserNameById, statusName}) =>{
    let currentDate = new Date();
    const [dueDateFull, setDueDateFull] = useState(false);
    const [startDateFull, setStartDateFull] = useState(false);

    const dueDateColor =
      new Date(incident.DueDate) < currentDate ? "red" : "green";
     
    return (
      <View style={styles.topContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.field}>
            Status:{" "}
            <Text style={styles.fieldValue}>{statusName(incident.Status)}</Text>
          </Text>
          <View style={styles.dateField}>
            <Text style={styles.field}>Due Date: </Text>
            <TouchableOpacity onPress={() => setDueDateFull(!dueDateFull)}>
              {dueDateFull ? (
                <Text
                  style={{
                    ...styles.fieldValue,
                    color: dueDateColor,
                    fontSize: 11,
                  }}
                >
                  {moment(incident.DueDate).format("MMMM DD YYYY, h:mm a")}
                </Text>
              ) : (
                <Text style={{ ...styles.fieldValue, color: dueDateColor }}>
                  {moment(incident.DueDate).fromNow()}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.field}>
            Assigned To:{" "}
            <Text style={styles.fieldValue}>
              {getUserNameById(incident.AssignedTo)}
            </Text>
          </Text>

          <View style={styles.dateField}>
            <Text style={styles.field}>Start Date: </Text>

            <TouchableOpacity onPress={() => setStartDateFull(!startDateFull)}>
              {startDateFull ? (
                <Text
                  style={{ ...styles.fieldValue, fontSize: 11, color: "blue" }}
                >
                  {moment(incident.StartTime).format("MMMM DD YYYY, h:mm a")}
                </Text>
              ) : (
                <Text style={{ ...styles.fieldValue }}>
                  {moment(incident.StartTime).fromNow()}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  const EditAbleFields = ({incident, getUserNameById, updateIncident, userId}) =>{
    const [status, setStatus] = useState('I');
    const [assginee, setAssginee] = useState('1');  

    const updateIncidentByField = (field , value) => {    
      let parameters = {
        IncidentId : incident.Id,
        Parameter : field,
        Value : value,
        UserId : userId
      };
      updateIncident(parameters); // Calling action here
    }

    
    const startTimeChanged = (newdate) => {
      console.log("New Start Date", newdate);
      updateIncidentByField("StartTime", newdate);
    };

    const dueDateChanged = (newdate) => {
      console.log("New Due Date", newdate);
      updateIncidentByField("DueDate", newdate);
    };
    return (
      <View style={styles.topContainerEdit}>
        <StatusDropDown selectedStatus={status} statusChanged={setStatus} />
        <AssigneeDropDown
          selectedAssignee={assginee}
          assigneeChanged={setAssginee}
        />
        <DateTimePicker
          label={"Start Time"}
          datetime={incident.StartTime}
          datetimeChanged={startTimeChanged}
        />
        <DateTimePicker
          label={"Due Date"}
          datetime={incident.DueDate}
          datetimeChanged={dueDateChanged}
        />
      </View>
    );
  }


  const mapStateToProps = (state) => {
    return {     
      incidentData: state.incidents.IncidentSelected,
      userId :state.userLogin.userId,  // logged in User Id  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateIncident: (parameters) => dispatch(updateIncident(parameters)),        
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(IncidentFields);


  const styles = StyleSheet.create({
    topContainer:{
      width: Dimensions.get("window").width,  
      flexDirection:'row',
      justifyContent:'space-around',      
    },
    fieldContainer:{  
        paddingHorizontal:20,
        marginVertical:5,
        flexDirection:'column',
    },
    field:{
       color:'#1A237E',
        fontSize:14,
        justifyContent:'center',
        alignItems:'center'       
    },
    fieldValue:{
        color:'#848B98',
    },
    dateField:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
    },
    editBtnContainer:{ 
      width: Dimensions.get("window").width,
      flexDirection: "row", 
      justifyContent: "flex-end" 
    },
    editBtn:{
      marginEnd:15,
      backgroundColor:'white',
    },    

    topContainerEdit:{
      width: Dimensions.get("window").width - 30,  
      flexDirection:'column',
      justifyContent:'center',  
    },
});
