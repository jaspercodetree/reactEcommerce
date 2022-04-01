import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsMessage from '../components/NewsMessage';
import Product from '../components/Product';

const Container = styled.div``;
const Title = styled.h2`
	margin: 16px 48px;
	font-weight: 700;
	margin-right: 8px;
`;
const FilterContainer = styled.div`
	margin: 0 48px 16px 48px;
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterText = styled.h3`
	margin-right: 8px;
`;
const Select = styled.select`
	padding: 4px 8px;
	margin-right: 8px;
`;
const Option = styled.option``;

const ProductList = () => {
	//獲取網址列category字串
	const location = useLocation();
	const cat = location.pathname.split('/')[2];

	//filter
	const [filter, setFilter] = useState({});
	const [sort, setSort] = useState('newest');

	const handleFilter = (e) => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value,
		});
	};

	// console.log(filter);
	console.log(sort);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>商品目錄</Title>
			<FilterContainer>
				<Filter>
					<FilterText>商品:</FilterText>
					<Select name="color" onChange={handleFilter}>
						<Option value="">全顏色</Option>
						<Option value="white">白</Option>
						<Option value="yellow">黃</Option>
						<Option value="red">紅</Option>
						<Option value="green">綠</Option>
						<Option value="blue">藍</Option>
					</Select>
					<Select name="size" onChange={handleFilter}>
						<Option value="">全尺寸</Option>
						<Option value="xl">XL</Option>
						<Option value="l">L</Option>
						<Option value="m">M</Option>
						<Option value="s">S</Option>
						<Option value="xs">XS</Option>
					</Select>
				</Filter>

				<Filter>
					<FilterText>排序:</FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value="newest">新上架</Option>
						<Option value="desc">價格--降冪排列</Option>
						<Option value="asc">價格--升序排列</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Product cat={cat} filter={filter} sort={sort} />
			<NewsMessage />
			<Footer />
		</Container>
	);
};

export default ProductList;
