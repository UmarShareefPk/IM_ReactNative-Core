import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import moment from "moment";;
import { connect  } from 'react-redux';

 function User({user}) {
  
  
    return (
      <View style={styles.container}>
        <View style={styles.pic}>
          <Text style={styles.user}>
            {user.FirstName.toUpperCase().slice(0, 1) +
              user.LastName.toUpperCase().slice(0, 1)}
          </Text>
        </View>

        <View style={styles.details}>
            <View style={styles.field}>
                <Text style={styles.label}>Name: </Text>
               <Text style={styles.value}>{user.FirstName + " " + user.LastName}</Text>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Email: </Text>
                <Text style={styles.value}>{user.Email}</Text>
            </View>

            <View style={styles.field}>
                <Text style={styles.label}>Joined: </Text>
                <Text style={styles.value}>{moment(user.CreateDate).fromNow()}</Text>
            </View>
          

         

         
        </View>
      </View>
    );

}

export default connect()(User);

const styles = StyleSheet.create({
container:{
  //flexDirection:'row',
  //backgroundColor:'red',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  marginBottom:10,
  borderWidth:0.5,
  borderRadius:10,
  padding:15,
  width: Dimensions.get("window").width - 10,
 alignSelf:'stretch'
},
pic:{
  width:100,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'flex-start',
  //backgroundColor:
},
user:{
  color:'white',
  fontSize:15,
  backgroundColor:'green',
  paddingHorizontal:15,
  paddingVertical:15,
  borderRadius:25
},
details:{
  width:250,
//backgroundColor:'red',
},
field:{ 
 alignSelf:'stretch', 
 flexDirection:'row',  
}, 
label:{
  color:'gray'
},
value:{
  //color:'#1A237E'
  color:'#1A237E'
}


});
