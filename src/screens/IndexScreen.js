import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);

	return (
		<View>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View style={styles.container}>
								<View style={styles.row}>
									<Text style={styles.title}>{item.title}</Text>
									<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
										<Feather name="trash" style={styles.icon} />
									</TouchableOpacity>
								</View>
							</View>
						</TouchableOpacity>
						
					);
				}}
			/>
				
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderColor: 'gray'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	},

	title: {
		fontSize: 22
	},

	icon: {
		fontSize: 26
	},
	
});

export default IndexScreen;
