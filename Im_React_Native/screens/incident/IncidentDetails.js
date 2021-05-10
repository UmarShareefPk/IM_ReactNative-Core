import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import { Button, Input, FAB, ButtonGroup  } from 'react-native-elements';
import { Feather, FontAwesome5, MaterialIcons,    } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native';

export default function IncidentDetails(props) {
    //const width1 = Dimensions.get('window').width; //full width
    const id = props.navigation.getParam('Id');

    const tabs = ['Details', 'Actions', 'Comments'];
    const [selectedTab, setSelectedTab] = useState(0);

    const tabChanged = (selectedIndex) => {
      setSelectedTab(selectedIndex);
    }
    
  const renderByTab = () => {
    let tab = selectedTab;
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
      return (<IncidentFields />)
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
          containerStyle={{ height: 50 }}
        />

      {renderByTab()}
      </View>
    );
}

const IncidentTitle = (props) => {
  const [editAble, setEditAble] = useState(false);
  return (
    <View>
      {
      editAble ?
       (
        <View style={styles.titleArea}>
          <Input placeholder="Enter new Title"  />
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
              icon={<FontAwesome5 name="save" size={30} color="white" />}
            />
          </View>
        </View>
      ) : 
      (
        <View style={styles.titleArea}>
          <Text style={styles.title}>
            Title will go here in case of long tile there will be space
            available below
            <TouchableOpacity onPress={() => setEditAble(!editAble)}>
              <Feather name="edit-2" size={24} color="black" />
            </TouchableOpacity>
          </Text>
          <Text style={styles.timestamp}>
            {" "}
            Created by {"Ali Raza"} 7 days ago
          </Text>
        </View>
      )}
    </View>
  );
}

const IncidentFields = (props) => {
  return (
    <View>
      <View style={styles.fields}>
        <Text style={styles.field}>
          Status: <Text style={styles.fieldValue}>New</Text>
        </Text>

        <Text style={styles.field}>
          Assigned To: <Text style={styles.fieldValue}>Umar Shareef</Text>
        </Text>

      </View>

      <View style={styles.fields}>

        <Text style={styles.field}>
          Due Date: <Text style={styles.fieldValue}>In 2 Days</Text>
        </Text>

        <Text style={styles.field}>
          Start Date: <Text style={styles.fieldValue}>In 2 Days</Text>
        </Text>

      </View>
    </View>
  );
}

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



const IncidentAttachments = (props) => {
  const [editAble, setEditAble] = useState(false);
  let files = [
    { Id: 1, FileName: "File 1 abdkadkjadshkahd bjdaksjhdk" },
    { Id: 2, FileName: "File 2" },
    { Id: 3, FileName: "File 12" },
    { Id: 4, FileName: "File 12" },
    { Id: 5, FileName: "File 13" },
    { Id: 6, FileName: "File 1d" },
  ];

  const renderFiles = ({ item }) => {
    
    return (
      <View style={styles.attchment}>
        {editAble ? (
          <TouchableOpacity style={{ marginRight: 7 }}>
            <MaterialIcons name="cancel" size={27} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <MaterialIcons name="file-download" size={27} color="blue" />
          </TouchableOpacity>
        )}

        <Text>{item.FileName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.attchments}>
          <TouchableOpacity onPress={() => setEditAble(!editAble)}>
        <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
          Attachments
          <Feather name="edit-2" size={20} color="black" />
        </Text>
      </TouchableOpacity>
      <FlatList      
        //numColumns={2}
        contentContainerStyle = {{justifyContent:'center',}}
        style = {{flex: 1,marginTop:10}} 
        data={files} 
        renderItem={renderFiles} 
        keyExtractor={(file, index) => file.Id}
      />
    </View>
  );
};



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

    titleArea:{
      width: Dimensions.get('window').width , 
        alignSelf:'stretch',
        padding:15,
        borderBottomWidth:0.5
    },
    title :{
        textAlign:'left',
        color:'#1A237E',
        fontSize:18
    },
    timestamp :{
      marginTop:5,
        textAlign:'right',
        fontSize:10,
        color:'#848B98',
    },


    fields:{   
        alignSelf:'stretch',
        paddingHorizontal:20,
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-between' ,
        width: Dimensions.get('window').width  
    },
    field:{
       color:'black',
        fontSize:13
    },
    fieldValue:{
        color:'#848B98',
        fontWeight:'bold'
    },


    descriptionBox:{      
       padding:10,         
       borderBottomWidth:0.5  
    },
    descriptionText:{ 
      padding:10,
      color: "gray", 
      fontSize: 13, 
      textAlign:'center',      
      width: Dimensions.get('window').width,
    },
    editBox:{
        padding:10, 
        width: Dimensions.get('window').width
    },
    editbtnsBox:{
        flexDirection:'row',
        justifyContent:"center"
    },



    attchments :{
      width: Dimensions.get('window').width,
       flex:1,    
       justifyContent:'center',
    },
    attchment:{     
       flexDirection:'row',
       marginLeft:30,
       textAlign:'right',     
    }

});
