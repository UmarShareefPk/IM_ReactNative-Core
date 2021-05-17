import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 


const Notification = () => {
    const [unread, setUnread] = useState(true)
    return (
      <View style={styles.container}>
        <Text style={styles.username}>US</Text>

        <Text style={styles.notificationText}>
          Test Notification est Notification est Notification est Notification
        </Text>

        <Text style={styles.time}>1 day ago</Text>

        {unread ? (
          <TouchableOpacity onPress={() => setUnread(false)}>
            <Ionicons name="reader" size={24} color="blue" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setUnread(true)}>
            <Ionicons name="reader-outline" size={24} color="blue" />
          </TouchableOpacity>
        )}
      </View>
    );
}

export default Notification

const styles = StyleSheet.create({
    container:{
       // borderWidth:1,
        paddingHorizontal:5,
        paddingVertical:5,
        margin:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
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
        fontSize:12
    },
    time:{
        fontSize:10
    },
});