import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Comment from './Comment'

const Comments = () => {
    return (

        <View>
           <ScrollView>
                <Comment />
                <Comment />
                <Comment />
           </ScrollView>
        </View>
    )
}

export default Comments
