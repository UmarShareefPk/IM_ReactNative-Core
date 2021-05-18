import React, { useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Dimensions, FlatList } from 'react-native';
import PageSizeDropDown from './PageSizeDropDown';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 


const Pagination = ({TotalRecords, PostsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentSize, setCurrentSize] = useState(PostsPerPage);

    let pagesBeforeExists = false;
    let pagesAfterExists = false;

    let pages = [];
    let totalPages = Math.ceil(TotalRecords / currentSize );  
    for (let i = 1; i <= totalPages; i++) {
      if(i < currentPage + 2 && i > currentPage - 2 )
           pages.push(i);
    }
   pagesBeforeExists = pages[0] > 1? true : false ;
   pagesAfterExists =  pages[pages.length - 1] < totalPages ? true : false;



    const pageNumberClick = (p) =>{        
        setCurrentPage(p);
    }

    const pageSizeChanged = (pSize) => {
      console.log(pSize);
      //  setPageSize(pSize);
        setCurrentSize(pSize);
        setCurrentPage(1);
      //  setPageNumber(1);
    }

    useEffect(() => {
        setCurrentPage(1);
       // setPageNumber(1); 
    }, [])

    pages = pages.map((p,index)=>{
        let pageStyle = currentPage === p ? {...styles.page,  backgroundColor:'#1A237E',   color:'white',} : styles.page;        
        return (
          <TouchableOpacity onPress={() => pageNumberClick(p)}>
            <Text style={pageStyle}>{p}</Text>
          </TouchableOpacity>
        );
    });

    return (
      <>
      <View style={styles.container}>
        <PageSizeDropDown
          pageSize={currentSize}
          pageSizeChanged={pageSizeChanged}
        />

        <View style={styles.pagesContainer}>
          <Text>Screens</Text>
          <TouchableOpacity onPress={() => setCurrentPage(1)}>
            <MaterialIcons name="navigate-before" size={40} color="#1A237E" />
          </TouchableOpacity>
          {pagesBeforeExists ? <Text>...</Text> : null}
          {pages}
          {pagesAfterExists ? <Text>...</Text> : null}
          <TouchableOpacity onPress={() => setCurrentPage(totalPages)}>
            <MaterialIcons name="navigate-next" size={40} color="#1A237E" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.information}>
          <Text style={styles.informationText}>
          {recordsInformation(TotalRecords, currentPage, currentSize)}
          </Text>
      </View>
      
      </>
    );
}

const recordsInformation = (TotalRecords, currentPage, currentSize) => {
  let start = 0;
  let end = 0;
  end = currentSize * currentPage;
  start = end - currentSize + 1 ;
  if(end > TotalRecords)
    end = TotalRecords;
  if(start > TotalRecords)
    start = TotalRecords;
  let information = `Showin from ${start} to ${end} of ${TotalRecords} records` +
                    ` (${Math.ceil(TotalRecords / currentSize )} screens)`;
  return information;
}

export default Pagination

const styles = StyleSheet.create({ 
     container:{
      width: Dimensions.get("window").width-10, 
       flexDirection:'row',
       justifyContent:'flex-end',
  
      //alignItems:'center'
     },
     pagesContainer:{
      alignSelf: 'stretch',
       flexDirection:'row',
       //justifyContent:'center',
       alignItems:'center',
       paddingHorizontal:10,
      
     },
     page:{
        borderWidth:0.3,
        borderRadius:5,
        paddingVertical:3,
        paddingHorizontal:7,
        fontSize:15,
        color:'#1A237E',
        marginHorizontal:3,
     },
     information:{
      width: Dimensions.get("window").width-20, 
      flexDirection:'row',
       justifyContent:'flex-end',      
     },
     informationText:{    
      color:'green',
      fontSize:12,
    
     },
  });