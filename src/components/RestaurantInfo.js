import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import Stars from 'components/Stars'

export class RestaurantInfo extends Component {
	static navigationOptions = {
		title: 'Restaurant Info',
	}

	render() {
		const place = this.props.navigation.getParam('place')
		return (
			<ScrollView style={styles.root}>
				<View style={styles.infoHeader}>
					<Image
						source={{ uri: `http://localhost:3000/images/${place.image}` }}
						style={styles.image}
					/>
					<View style={styles.info}>
						<Text style={styles.name}>{place.name}</Text>
						<Text style={styles.address}>{place.address}</Text>
						<Stars rating={place.rating} />
					</View>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	address: {
		color: 'grey',
		marginBottom: 5,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	info: {
		marginTop: 20,
	},
	infoHeader: {
		flexDirection: 'row',
	},
	name: {
		fontSize: 24,
	},
	root: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
export default RestaurantInfo
