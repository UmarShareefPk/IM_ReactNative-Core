import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import moment from "moment";;
import { connect  } from 'react-redux';

 function User({user}) {
  
  
    return (
      <View>
        <View style={styles}>
          <Text style={styles}>{user.FirstName}</Text>
        </View>

        <View style={styles}>
          <Text style={styles}>{user.LastName}</Text>
        </View>

        <View style={styles}>
          <Text style={styles}>{user.Email}</Text>
        </View>

        <View style={styles}>
          <Text style={styles}>{user.CreateDate}</Text>
        </View>
      </View>
    );

}

export default connect()(User);

const styles = StyleSheet.create({
    

});
