import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Text, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Header from '../../components/header/index';
import Tabs from '../../components/Tabs/index';
import Menu from '../../components/Menu/index';
import { Card } from './styles';

function Main() {
	let offset = 0;

	const translateY = new Animated.Value(0);

	const animatedEvent = Animated.event(
		[
			{
				nativeEvent: {
					translationY: translateY
				}
			}
		],
		{
			useNativeDriver: true
		}
	);
	function onHandlerStateChanged(event) {
		if (event.nativeEvent.oldState === State.ACTIVE) {
			let opened = false;
			const { translationY } = event.nativeEvent;
			offset += translationY;

			if (translationY >= 100) {
				opened = true;
			} else {
				translateY.setValue(offset);
				translateY.setOffset(0);
				offset = 0;
			}
			Animated.timing(translateY, {
				toValue: opened ? 380 : 0,
				duration: 200,
				useNativeDriver: true
			}).start(() => {
				offset = opened ? 380 : 0;
				translateY.setOffset(offset);
				translateY.setValue(0);
			});
		}
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<Menu translateY={translateY} />
				<PanGestureHandler
					onGestureEvent={animatedEvent}
					onHandlerStateChange={onHandlerStateChanged}
				>
					<Card
						style={{
							transform: [
								{
									translateY: translateY.interpolate({
										inputRange: [-350, 0, 380],
										outputRange: [-50, 0, 380],
										extrapolate: 'clamp'
									})
								}
							]
						}}
					>
						<View style={styles.cardHeader}>
							<Icon name='attach-money' size={28} color='#666' />
							<Icon name='visibility-off' size={28} color='#666' />
						</View>
						<View style={styles.CardContent}>
							<Text style={styles.title}>Saldo Disponível</Text>
							<Text style={styles.description}>R$ 1.687.151,86</Text>
						</View>
						<View style={styles.cardFooter}>
							<View style={styles.annotation}>
								<Text style={styles.transfer}>
									Transferência de R$ 20,00 reais recebida de Mariana d'Avilla
									hoje às 10:00h
								</Text>
							</View>
						</View>
					</Card>
				</PanGestureHandler>
			</View>

			<Tabs translateY={translateY} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8B10AE',
		justifyContent: 'center'
	},
	content: {
		flex: 1,
		maxHeight: 400,
		zIndex: 5
	},

	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 30
	},
	CardContent: {
		flex: 1,
		paddingVertical: 0,
		paddingHorizontal: 30,
		justifyContent: 'center'
	},
	title: {
		fontSize: 13,
		color: '#999'
	},
	description: {
		fontSize: 32,
		marginTop: 3,
		color: '#333'
	},
	cardFooter: {
		padding: 30,
		backgroundColor: '#eee',
		borderRadius: 4
	},
	transfer: {
		fontSize: 12,
		color: '#333'
	}
});

export default Main;
