import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 


const Notification = () => {
    const [read, setRead] = useState(true);
    const containerStyle = read? styles.container  : {...styles.container, ...styles.unRead };
    const notificationTextStyle = read? {...styles.notificationText, ...styles.notificationTextRead } : styles.notificationText   ;
    useEffect(() => {
      //console.log("loading");      
    }, [])
    return (
      <View style={containerStyle}>
        <Text style={styles.username}>US</Text>

        <Text style={notificationTextStyle}>
          Test Notification est Notification est Notification est Notification
        </Text>

        <Text style={styles.time}>1 day ago</Text>

        {read ? (
          <TouchableOpacity onPress={() => setRead(false)}>
            <Ionicons name="reader-outline" size={24} color="gray" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setRead(true)}>
            <Ionicons name="reader" size={24} color="#f5f5f5" />
          </TouchableOpacity>
        )}
      </View>
    );
}

export default Notification

const styles = StyleSheet.create({
    container:{
       // borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        margin:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    unRead:{
      backgroundColor:'#1A237E',
    },
    username:{
        color:'white',
        backgroundColor:'#c65102',
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:15
    },
    notificationText:{
        flex:0.9,
        fontSize:12,
        color:'#f5f5f5'
    },
    notificationTextRead:{
      color:'gray'
    },
    time:{
        fontSize:10,
        color:'gray'
    },
});