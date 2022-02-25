import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Product = ({ cat, filter, sort }) => {
	const [products, setProducts] = useState([]);
	const [filterProducts, setFilterProducts] = useState([]);

	//向後端拿產品資訊(分為1.有category 2.全拿)
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					cat
						? `http://localhost:5000/api/product?category=${cat}`
						: 'http://localhost:5000/api/product'
				);
				// console.log(res);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [cat]);

	// console.log(products);
	// const productsArray = products.filter((item) => item.title === '外套');
	// products.length !== 0 &&
	// 	// console.log('productsArray', productsArray[0]['color']);
	// 	console.log('products', products);

	// 透過select篩選，顯示特定產品
	useEffect(() => {
		//將object 全然轉為 array
		const categoryArray = filter ? Object.entries(filter) : [];
		// console.log('array', categoryArray[0]);

		let productCatFilterAry = products.filter((item) => {
			return categoryArray.every(([key, value]) => {
				return item[key].includes(value);
				//例如: item['color'] 內是否有包含 "綠色"(value)
			});
		});

		console.log(productCatFilterAry);
		setFilterProducts(productCatFilterAry);
	}, [cat, filter, products]);

	return (
		<Container>
			{filterProducts.map((item) => (
				<ProductItem key={item.id} item={item}></ProductItem>
			))}
		</Container>
	);
};

export default Product;
