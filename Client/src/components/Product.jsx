import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
		console.log('object', filter);
		const categoryArray = filter ? Object.entries(filter) : [];
		console.log('array', categoryArray);

		let productCatFilterAry = products.filter((item) => {
			return categoryArray.every(([key, value]) => {
				return item[key].includes(value);
				//例如: item['color'] 內是否有包含 "綠色"(value)
			});
		});

		// console.log(productCatFilterAry);
		setFilterProducts(productCatFilterAry);
	}, [cat, filter, products]);

	// const apple = [1, 3, 2, 4];
	// apple.sort((a, b) => {
	// 	return b - a;
	// });
	// console.log(apple);

	useEffect(() => {
		if (sort === 'newest') {
			setFilterProducts((prev) =>
				[...prev].sort(
					(a, b) =>
						Date.parse(`${a.createdAt}`) -
						Date.parse(`${b.createdAt}`)
				)
			);
		} else if (sort === 'asc') {
			setFilterProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else if (sort === 'desc') {
			setFilterProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);

	return (
		<Container>
			{filterProducts.map((item) => (
				<ProductItem key={item._id} item={item}></ProductItem>
			))}
		</Container>
	);
};

export default Product;
