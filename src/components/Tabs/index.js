import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
export default function Tabs({ translateY }) {
	return (
		<Container
			style={{
				transform: [
					{
						translateY: translateY.interpolate({
							inputRange: [0, 380],
							outputRange: [0, 30],
							extrapolate: 'clamp'
						})
					}
				],
				opacity: translateY.interpolate({
					inputRange: [0, 380],
					outputRange: [1, 0.3],
					extrapolate: 'clamp'
				})
			}}
		>
			<ScrollView
				style={styles.TabsContainer}
				contentContainerStyle={styles.scrollview}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			>
				<View style={styles.tabitem}>
					<Icon name='person-add' size={24} color='#FFF' />
					<Text style={styles.TabText}>Indicar Amigos</Text>
				</View>

				<View style={styles.tabitem}>
					<Icon name='chat-bubble-outline' size={24} color='#FFF' />
					<Text style={styles.TabText}>Cobrar</Text>
				</View>

				<View style={styles.tabitem}>
					<Icon name='arrow-downward' size={24} color='#FFF' />
					<Text style={styles.TabText}>Depositar</Text>
				</View>

				<View style={styles.tabitem}>
					<Icon name='arrow-upward' size={24} color='#FFF' />
					<Text style={styles.TabText}>Transferir</Text>
				</View>

				<View style={styles.tabitem}>
					<Icon name='lock' size={24} color='#FFF' />
					<Text style={styles.TabText}>Bloquear Cartão</Text>
				</View>
			</ScrollView>
		</Container>
	);
}
const styles = StyleSheet.create({
	scrollview: {
		paddingLeft: 10,
		paddingRight: 20
	},
	tabitem: {
		width: 100,
		height: 100,
		backgroundColor: '#bf40bf',
		borderRadius: 3,
		marginLeft: 10,
		padding: 10,
		justifyContent: 'space-between'
	},
	TabText: {
		fontSize: 13,
		color: '#fff'
	}
});
