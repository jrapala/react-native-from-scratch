import React, { Component } from 'react'
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import SplashScreen from 'react-native-splash-screen'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import AddReview from 'components/AddReview'
import About from 'components/About'

const List = createStackNavigator(
	{
		Home: { screen: RestaurantList },
		Info: { screen: RestaurantInfo },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#0066CC',
				color: 'FFF',
			},
			headerTintColor: '#FFF',
			headerTitleStyle: {
				color: '#FFF',
			},
		},
	}
)

const Tabs = createBottomTabNavigator(
	{
		List: { screen: List },
		About: { screen: About },
	},
	{
		defaultNavigationOptions: ({ navigation }) => {
			return {
				tabBarIcon: ({ tintColor }) => {
					const route = navigation.state.routeName
					const name = {
						List: 'list',
						About: 'info-circle',
					}[route]
					return <Icon name={name} color={tintColor} size={22} />
				},
				tabBarOption: {
					activeBackgroundColor: '#E6F0FA',
				},
			}
		},
	}
)

const Modal = createStackNavigator(
	{
		Tabs: { screen: Tabs },
		AddReview: { screen: AddReview },
	},
	{
		mode: 'modal',
		headerMode: 'none',
		navigationOptions: {
			gesturesEnabled: false,
		},
	}
)

const ModalNav = createAppContainer(Modal)

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide()
	}
	render() {
		return <ModalNav />
	}
}
