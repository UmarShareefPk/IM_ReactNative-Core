import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Comment from './Comment'

const Comments = () => {
    return (        
        <ScrollView>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </ScrollView>    
    )
}

export default Comments
