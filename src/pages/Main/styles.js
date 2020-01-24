import { Animated } from 'react-native';
import styled from 'styled-components';

export const Card = styled(Animated.View)`
	flex: 1;
	background: #fff;
	border-radius: 4px;
	margin: 0 20px;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
`;
