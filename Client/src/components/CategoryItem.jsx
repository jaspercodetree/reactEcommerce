import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 1rem;
	height: 70vh;
`;
const linkStyle = {
	height: '100%',
};
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 8px;
	cursor: pointer;
`;
const Info = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 16px;
`;
const Title = styled.h1`
	font-size: 32px;
	color: #fff;
`;
const Button = styled.button`
	margin-top: 8px;
	border: 0;
	border-radius: 8px;
	background-color: #ffa;
	padding: 12px 16px;
	width: 120px;
	cursor: pointer;

	&:hover {
		background-color: #faa;
	}
`;

const CategoryItem = ({ item }) => {
	return (
		<Container key={item.id}>
			<Link style={linkStyle} to={`/productlist/${item.cat}`}>
				<Image src={item.img} />
				<Info>
					<Title>{item.title}</Title>
					<Button>Buy Now</Button>
				</Info>
			</Link>
		</Container>
	);
};

export default CategoryItem;
