import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Product = ({ cat, filter, sort }) => {
	console.log(cat, filter, sort);

	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:5000/api/product?category=${cat}`
						: 'http://localhost:5000/api/product'
				);
				console.log(res);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [cat]);

	return (
		<Container>
			{popularProducts.map((item) => (
				<ProductItem key={item.id} item={item}></ProductItem>
			))}
		</Container>
	);
};

export default Product;
