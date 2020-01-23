import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../assets/Nubank_Logo.png';

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Image source={Logo} />
				<Text style={styles.text}>Mateus</Text>
			</View>
			<Icon name='keyboard-arrow-down' size={20} color='#FFF' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 40,
		paddingHorizontal: 0,
		paddingBottom: 30
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	text: {
		fontSize: 18,
		color: '#FFF',
		fontWeight: 'bold',
		marginLeft: 8
	}
});
