import React from 'react';
import Header from '../../components/header/index';
import Tabs from '../../components/Tabs/index'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

function Main() {
	return (
		<View style={styles.container}>
			<Header />
      <Tabs/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#8B10AE'
	}
});

export default Main;
