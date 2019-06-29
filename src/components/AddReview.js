import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export class AddReview extends Component {
	state = {
		name: '',
	}
	close = () => {
		this.props.navigation.goBack()
	}
	render() {
		return (
			<KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
				<View style={styles.root}>
					<TouchableOpacity style={styles.button} onPress={this.close}>
						<Icon name="close" size={30} color="#0066cc" />
					</TouchableOpacity>
					<Text style={styles.addReview}>Add Review</Text>
					<TextInput
						style={styles.input}
						placeholder="Name (optional)"
						value={this.state.name}
						onChangeText={name => this.setState({ name })}
					/>
					<Text style={styles.rating}>Your Rating:</Text>
					<View style={styles.stars}>
						{[1, 2, 3, 4, 5].map(i => {
							return (
								<TouchableOpacity
									onPress={() => this.setState({ rating: i })}
									style={styles.starButton}
									key={i}
								>
									<Icon
										name={'star'}
										color={this.state.rating >= i ? '#FFD64C' : '#CCC'}
										size={40}
									/>
								</TouchableOpacity>
							)
						})}
					</View>
					<TextInput
						style={[styles.input, { height: 100 }]}
						placeholder="Review"
						value={this.state.review}
						onChangeText={review => this.setState({ review })}
						multiline={true}
						numberOfLines={5}
					/>
					<TouchableOpacity style={styles.submitButton}>
						<Text style={styles.submitButtonText}>Submit Review</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAwareScrollView>
		)
	}
}

const styles = StyleSheet.create({
	addReview: {
		fontSize: 25,
		color: '#444',
		textAlign: 'center',
		margin: 20,
	},
	button: {
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	input: {
		padding: 10,
		marginVertical: 10,
		marginHorizontal: 20,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 3,
	},
	rating: {
		fontSize: 20,
		color: 'gray',
		textAlign: 'center',
		marginVertical: 40,
	},
	root: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 20,
	},
	starButton: {
		padding: 5,
	},
	stars: {
		marginBottom: 80,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	submitButton: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#0066cc',
		borderRadius: 4,
		marginVertical: 10,
		marginHorizontal: 20,
	},
	submitButtonText: {
		fontSize: 18,
		color: '#fff',
		textAlign: 'center',
	},
})

export default AddReview
