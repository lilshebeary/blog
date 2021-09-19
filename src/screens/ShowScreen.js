import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
   const { state } = useContext(Context);

   const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 25
    },
    title: {
       
        fontSize: 24,
        
    }
});

export default ShowScreen;