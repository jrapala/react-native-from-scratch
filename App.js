import React, {Component} from 'react'
import {FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'
import Header from 'components/Header'
import RestaurantRow from 'components/RestaurantRow'

export default class App extends Component<Props> {
	state = {
		restaurants: [],
		search: null,
	}

	componentDidMount() {
		fetch('http://localhost:3000/restaurants')
			.then(response => response.json())
			.then(result => this.setState({restaurants: result}))
	}

	render() {
		const {restaurants} = this.state
		return (
			<View style={styles.container}>
				<Header />
				<TextInput
					style={styles.input}
					placeholder="Live Search"
					onChangeText={text => {
						this.setState({search: text})
					}}
					value={this.state.search}
				/>
				<FlatList
					data={restaurants.filter(place => {
						return (
							!this.state.search ||
							place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
						)
					})}
					renderItem={({item, index}) => <RestaurantRow place={item} index={index} />}
					keyExtractor={item => item.name}
					initialNumToRender={16}
				></FlatList>
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
