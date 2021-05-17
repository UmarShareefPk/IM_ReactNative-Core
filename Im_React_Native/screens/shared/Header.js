import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StyleSheet, Modal } from 'react-native'
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { withTheme } from 'react-native-elements';
import Notifications from '../notification/Notifications';

const Header = ({title, navigation}) => {
    const [notificationsVisibility, setNotificationsVisibility] = useState(false);

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.btns}>
          <Text style={styles.username}>US</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setNotificationsVisibility(true)}
          >
            <MaterialIcons name="notifications-none" size={24} color="white" />
            <Text style={styles.notificationText}>5 new</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          visible={notificationsVisibility}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setNotificationsVisibility(false);
          }}
        >
          <Notifications showModal={setNotificationsVisibility} />
        </Modal>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    title:{
       // marginLeft:70,
    },
    titleText:{
       color:'white',
       fontSize:20,
       fontWeight:'bold',
       
    },
    btns:{
        flexDirection:'row',
        flex:0.6,
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        flexDirection:'row',
        alignItems:'center'
    },
    notificationText:{
        color:'white',
        fontSize:10,
        backgroundColor:'#d90166',
        borderWidth:1,
        borderColor:'#d90166',
        borderRadius:5,
        paddingVertical:3,
        paddingHorizontal:4,
    },
    username:{
        color:'white',
        backgroundColor:'#c65102',
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:15
    },
});

export default Header
