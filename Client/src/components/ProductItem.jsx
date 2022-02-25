import { Favorite, Search, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	flex: 1;
	padding: 16px;
	margin: 8px;
	min-width: 280px;
	max-width: 280px;
	height: 350px;
	cursor: pointer;
	background-color: #f5fdfb;
`;

const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 250px;
	height: 250px;
	background-color: #fff;
	border-radius: 50%;
	z-index: 0;
`;

const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
`;

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	z-index: 2;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;

	&:hover {
		background-color: rgba(0, 0, 0, 0.7);

		div {
			display: flex;
		}
	}
`;

const Icon = styled.div`
	padding: 8px;
	margin: 8px;
	background-color: #fff;
	border-radius: 50%;
	display: none;
	cursor: pointer;
	transition: all 0.5s ease;

	&:hover {
		transform: scale(1.2);
		background-color: #ffa;
	}
`;

const ProductItem = ({ item }) => {
	return (
		<Container>
			<Circle></Circle>
			<Image src={'http://localhost:3000/assets/product/' + item.img} />
			<Info>
				<Icon>
					<ShoppingCart />
				</Icon>
				<Icon>
					<Favorite />
				</Icon>
				<Icon>
					<Search />
				</Icon>
			</Info>
		</Container>
	);
};

export default ProductItem;
