import React, {Component} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from 'react-native'
import Stars from 'components/Stars'

export default class RestaurantRow extends Component<Props> {
	state = {
		showInfo: false,
	}

	infoPressed = () => {
		// this.setState({showInfo: !this.state.showInfo})
		this.props.navigation.navigate('Info')
	}
	render() {
		const {place, index} = this.props
		return (
			<View style={{backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}} key={place.name}>
				<View style={styles.row}>
					<View style={styles.stars}>
						<Stars rating={place.rating} />
					</View>
					<View style={styles.nameAddress}>
						<Text>{place.name}</Text>
						<Text style={styles.address}>{place.address}</Text>
					</View>
					<View style={styles.edges}>
						<TouchableHighlight
							onPress={this.infoPressed}
							style={styles.button}
							underlayColor="#5398DC"
						>
							<Text style={styles.buttonText}>Info</Text>
						</TouchableHighlight>
					</View>
				</View>
				{this.state.showInfo && (
					<View style={styles.info}>
						<Text>Restaurant Info</Text>
						<Image
							source={{
								uri: `http://localhost:3000/images/${place.image}`,
							}}
							style={{height: 100, flex: 1}}
							resizeMode="contain"
						/>
					</View>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	address: {
		color: 'grey',
	},
	button: {
		borderWidth: 1,
		borderColor: '#0066CC',
		borderRadius: 14,
		paddingHorizontal: 10,
		paddingVertical: 3,
		backgroundColor: '#fff',
	},
	buttonText: {
		color: '#0066CC',
		fontSize: 12,
	},
	edges: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: 5,
		minWidth: 50,
	},
	info: {
		marginHorizontal: 40,
		marginVertical: 10,
		padding: 10,
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#DDD',
		borderRadius: 4,
	},
	nameAddress: {
		flexDirection: 'column',
		flex: 8,
	},
	row: {
		flexDirection: 'row',
	},
	stars: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		padding: 5,
		minWidth: 50,
	},
})
