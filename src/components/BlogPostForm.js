import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <Button 
                title="Add Blog Post" 
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                   
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 25
    },
    input: {
        fontSize: 20, 
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 35,
        padding: 5,
        margin: 15
    },
    label: {
        fontSize: 25,
        marginHorizontal: 15,


    }

});

export default BlogPostForm;