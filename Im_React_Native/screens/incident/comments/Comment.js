import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const Comment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row', alignItems:'center'}}> 
                    <Text style={styles.user}>
                        {"Umar Shareef"}
                    </Text>
                    <Text style={{fontSize:10, padding:0}}>
                         added a comment 
                     </Text>
                </View>               
                <Text style={{fontSize:10, color:'blue'}}>3 days ago</Text>
            </View>

            <View>
                <Text  style={styles.commentText}>
                   A Palestinian child running after the bodies of his father and brother during their funeral procession in #Gaza. They were killed yesterday by Israeli airstrikes
                </Text>
            </View>

        </View>
    )
}

export default Comment

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width - 10,
        // margin:5,
        marginBottom: 5,
        padding: 10,
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 0.5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: { fontSize: 12, fontWeight: 'bold', marginRight: 5, color:'#1A237E' },
    commentText: {
        marginTop: 5,
        fontSize: 12,
        paddingHorizontal: 8,
        color: 'grey'
    },

});