import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = () => {
    return (        
        <>
            <AddComment />
            <ScrollView>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </ScrollView>
        </>
    )
}

export default Comments
