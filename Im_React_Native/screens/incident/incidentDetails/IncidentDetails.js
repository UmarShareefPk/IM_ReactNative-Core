import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';
import IncidentTitle from './IncidentTitle';
import IncidentFields from './IncidentFields';
import IncidentDescription from './IncidentDescription';
import IncidentAttachments from './IncidentAttachments';
import Comments from '../comments/Comments'

export default function IncidentDetails(props) {
    //const width1 = Dimensions.get('window').width; //full width
    const id = props.navigation.getParam('Id');

    const tabs = ['Details',  'Comments'];
    const [selectedTab, setSelectedTab] = useState(0);

    const tabChanged = (selectedIndex) => {
      setSelectedTab(selectedIndex);
    }
    
  const renderByTab = () => {
    let tab = selectedTab;
    console.log(tab,"tab");
    if (tab == 0)
      return (
        <>
       <ScrollView>
          <IncidentDescription type="description" />
          <IncidentDescription type="addtionalData" />
          <IncidentAttachments />
          </ScrollView>
        </>
      )
    else if (tab == 1)
      return (<Comments />)
    if (tab == 2)
      return (<IncidentFields />)

  }
    //console.log(props);
    return (
      <View style={styles.container}>
        
        <IncidentTitle />
        <IncidentFields />
        <ButtonGroup
          onPress={tabChanged}
          selectedIndex={selectedTab}
          buttons={tabs}
          containerStyle={{ height: 30, backgroundColor:'gray'}}
          textStyle={{color:'white'}}
          selectedButtonStyle = {{backgroundColor:'#1A237E'}}
         // selectedTextStyle = {{color:'red'}}
         innerBorderStyle = {{width:2, color:'white'}}
         
        />

      {renderByTab()}

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
});
