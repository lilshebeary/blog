import React, { useContext, useState }from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput 
                autoCorrect='false'
                value={title}
                onChangeText={newTitle => setTitle(newTitle)}
                style={styles.input}
            />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput
                autoCorrect='false'
                value={content}
                onChangeText={newContent => setContent(newContent)}
                style={styles.input}
            />
            <Button 
                title="Save Blog Post" 
                onPress={() => {
                    editBlogPost(title, content, () => {
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

export default EditScreen;