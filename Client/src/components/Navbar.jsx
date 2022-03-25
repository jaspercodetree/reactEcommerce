import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 0.75rem 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	cursor: pointer;
	margin-right: 1.25rem;
`;

const SearchContainer = styled.div`
	display: flex;
	border: 1px solid lightgray;
	padding: 0.25rem;
`;

const Input = styled.input`
	border: none;
	outline: none;
`;

const Center = styled.div`
	flex: 1;
`;

const Logo = styled.h1`
	text-align: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.span`
	font-size: 0.875rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>TC</Language>
					<SearchContainer>
						<Input />
						<Search style={{ fontSize: '16px', color: 'grey' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/">
						<Logo>Jasper.</Logo>
					</Link>
				</Center>
				<Right>
					<MenuItem>
						<Link to="/register">Register</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/login">Login</Link>
					</MenuItem>
					<Badge badgeContent={4} color="primary">
						<Link to="/cart">
							<ShoppingCartOutlined
								color="action"
								style={{ cursor: 'pointer' }}
							/>
						</Link>
					</Badge>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
