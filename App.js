import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'
import HeaderStyle from './HeaderStyle'

const restaurants = [
	{
		name: 'React Cafe',
		address: '123 Anywhere St',
	},
	{
		name: 'Fancy Restaurant',
		address: '799 Main St',
	},
	{
		name: 'Taco Place',
		address: '550 Maple Rd',
	},
]
export default class App extends Component<Props> {
	state = {
		search: null,
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={HeaderStyle.header}>Restaurant Review</Text>
				<TextInput
					style={styles.input}
					placeholder="Live Search"
					onChangeText={text => {
						this.setState({search: text})
					}}
					value={this.state.search}
				/>
				{restaurants
					.filter(place => {
						return (
							!this.state.search ||
							place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
						)
					})
					.map((place, index) => {
						return (
							<View
								style={[
									styles.row,
									{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'},
								]}
								key={place.name}
							>
								<View style={styles.edges}>
									<Text>{index + 1}</Text>
								</View>
								<View style={styles.nameAddress}>
									<Text>{place.name}</Text>
									<Text style={styles.address}>{place.address}</Text>
								</View>
								<View style={styles.edges}>
									<Text>Info</Text>
								</View>
							</View>
						)
					})}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	address: {
		color: 'grey',
	},
	container: {
		flex: 1,
	},
	edges: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 5,
	},
	input: {
		marginBottom: 30,
		padding: 10,
		paddingHorizontal: 20,
		fontSize: 16,
		color: '#444',
		borderBottomWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#F5F5F5',
	},
	nameAddress: {
		flexDirection: 'column',
		flex: 8,
	},
	row: {
		flexDirection: 'row',
	},
})
