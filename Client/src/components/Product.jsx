import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Product = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<ProductItem key={item.id} item={item}></ProductItem>
			))}
		</Container>
	);
};

export default Product;
