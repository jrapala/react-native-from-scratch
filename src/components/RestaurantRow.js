import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class RestaurantRow extends Component<Props> {
	render() {
		const {place, index} = this.props
		return (
			<View
				style={[styles.row, {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}]}
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
	}
}

const styles = StyleSheet.create({
	address: {
		color: 'grey',
	},
	edges: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 5,
	},
	nameAddress: {
		flexDirection: 'column',
		flex: 8,
	},
	row: {
		flexDirection: 'row',
	},
})
