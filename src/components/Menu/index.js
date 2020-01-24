import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	TouchableOpacity
} from 'react-native';
export default function Menu() {
	return (
		<>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.scrollview}
			>
				<View style={styles.code}>
					<QRCode
						value='https://github.com/mateusamarall'
						size={80}
						color='#FFF'
						backgroundColor='#000'
					></QRCode>
				</View>
				<View style={styles.nav}>
					<View style={styles.navItem}>
						<Icon name='help-outline' size={20} color='#fff' />
						<Text style={styles.navText}>Me Ajude</Text>
					</View>

					<View style={styles.navItem}>
						<Icon name='person-outline' size={20} color='#fff' />
						<Text style={styles.navText}>Perfil</Text>
					</View>

					<View style={styles.navItem}>
						<Icon name='credit-card' size={20} color='#fff' />
						<Text style={styles.navText}>Configurar cartão</Text>
					</View>

					<View style={styles.navItem}>
						<Icon name='smartphone' size={20} color='#fff' />
						<Text style={styles.navText}>Configurações do App</Text>
					</View>
				</View>
				<TouchableOpacity onPress={() => {}} style={styles.signout}>
					<Text style={styles.textOut}>SAIR DO APP</Text>
				</TouchableOpacity>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 0,
		marginHorizontal: 30
	},
	scrollview: {
		alignItems: 'center'
	},
	code: {
		backgroundColor: '#FFF',
		padding: 10
	},
	nav: {
		marginTop: 30,
		alignSelf: 'stretch',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: 'rgba(255, 255, 255, 0.8)'
	},
	navItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		paddingHorizontal: 0,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: 'rgba(255, 255, 255, 0.8)'
	},
	navText: {
		fontSize: 15,
		color: '#FFF',
		marginLeft: 20
	},
	signout: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 4,
		justifyContent: 'center',
		alignSelf: 'center',
		padding: 12,
		marginTop: 15
	},
	textOut: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 13
	}
});
