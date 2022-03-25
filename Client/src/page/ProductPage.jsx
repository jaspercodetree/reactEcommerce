import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsMessage from '../components/NewsMessage';

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
	margin-right: 12px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	height: 36px;
	width: 64px;
	padding: 0 4px;
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
	return (
		<div>
			<Navbar></Navbar>
			<Announcement></Announcement>
			<Wrapper>
				<ImgContainer>
					<Img
						src={'http://localhost:3000/assets/product/'.concat(
							'jean.jpg'
						)}
					/>
				</ImgContainer>
				<InfoContainer>
					<Title>女有機棉混彈性丹寧直筒褲</Title>
					<Desc>
						保有丹寧素材的質感，具適度彈性，方便活動。使用有機棉製成。
						保有丹寧素材的質感，具適度彈性，方便活動。使用有機棉製成。
						保有丹寧素材的質感，具適度彈性，方便活動。使用有機棉製成。
					</Desc>
					<Price>$ 999</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>顏色</FilterTitle>
							<FilterColor color="grey"></FilterColor>
							<FilterColor color="teal"></FilterColor>
							<FilterColor color="darkblue"></FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>尺寸</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove style={{ cursor: 'pointer' }} />
							<Amount>1</Amount>
							<Add style={{ cursor: 'pointer' }} />
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
