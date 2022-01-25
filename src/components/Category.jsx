import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
	display: flex;
	max-width: 100%;
	margin-top: 1rem;
	justify-content: center;
`;

const Category = () => {
	return (
		<Container>
			{categories.map((item) => (
				<CategoryItem key={item.id} item={item}></CategoryItem>
			))}
		</Container>
	);
};

export default Category;
