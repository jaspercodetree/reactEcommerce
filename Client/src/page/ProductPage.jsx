import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsMessage from '../components/NewsMessage';
import { publicRequest } from '../requestMethods';

const Wrapper = styled.div`
	display: flex;
	padding: 48px;
`;
const ImgContainer = styled.div`
	flex: 1;
	margin-right: 24px;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const InfoContainer = styled.div`
	flex: 1;
	margin-left: 24px;
`;
const Title = styled.h1`
	margin-bottom: 24px;
	font-weight: 500;
`;
const Desc = styled.p`
	margin-bottom: 24px;
`;
const Price = styled.h1`
	font-weight: 300;
	margin-bottom: 24px;
`;
const FilterContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.h3`
	font-weight: 300;
	margin-right: 12px;
`;
const FilterColor = styled.div`
	width: 24px;
	height: 24px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
	border: 1px solid #bbb;
	margin-right: 12px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	height: 36px;
	width: 64px;
	padding: 0 4px;
	text-align: center;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: space-between;
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Amount = styled.h3`
	margin: 0 12px;
	padding: 4px 12px;
	border: 1px solid teal;
	border-radius: 8px;
	font-weight: 500;
	width: 24px;
	text-align: center;
`;
const Button = styled.button`
	border: 1px solid teal;
	padding: 16px 16px;
	border-radius: 8px;
	cursor: pointer;
	background-color: lightyellow;
	font-size: 16px;
`;

const ProductPage = () => {
	const [product, setProduct] = useState({});
	const [count, setCount] = useState(1);

	const location = useLocation();
	const productId = location.pathname.split('/')[2];

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(
					`product/find/` + productId
				);
				setProduct(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, [productId]);

	const handleCount = (i) => {
		i === 'minus' && count > 1
			? setCount(count - 1)
			: i === 'plus' && count < 999 && setCount(count + 1);
	};

	console.log(product);

	return (
		<div>
			<Navbar></Navbar>
			<Announcement></Announcement>
			<Wrapper>
				<ImgContainer>
					<Img
						src={
							`http://localhost:3000/assets/product/` +
							product?.img
						}
					/>
				</ImgContainer>
				<InfoContainer>
					<Title>{product?.title}</Title>
					<Desc>{product?.desc}</Desc>
					<Price>$ {product?.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>顏色</FilterTitle>
							{product.color?.map((c) => (
								<FilterColor color={c} key={c}></FilterColor>
							))}
						</Filter>
						<Filter>
							<FilterTitle>尺寸</FilterTitle>
							<FilterSize>
								{product.size?.map((size) => (
									<FilterSizeOption key={size}>
										{size.toUpperCase()}
									</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove
								style={{ cursor: 'pointer' }}
								onClick={() => handleCount('minus')}
							/>
							<Amount>{count}</Amount>
							<Add
								style={{ cursor: 'pointer' }}
								onClick={() => handleCount('plus')}
							/>
						</AmountContainer>
						<Button>加入購物車</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsMessage></NewsMessage>
			<Footer></Footer>
		</div>
	);
};

export default ProductPage;
