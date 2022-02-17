import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar></Navbar>
			<Announcement></Announcement>
			<Wrapper>
				<Title>購買清單</Title>
				<Top>
					<TopButton>繼續購物</TopButton>
					<TopTexts>
						<TopText>購物車(2)</TopText>
						<TopText>心願清單 (0)</TopText>
					</TopTexts>
					<TopButton type="filled">立即結帳</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="./assets/product/product2.jpg" />
								<Details>
									<ProductName>
										<b>產品:</b> 有機棉丹寧立領寬版襯衫
									</ProductName>
									<ProductId>
										<b>ID:</b> 4550344733769
									</ProductId>
									<ProductColor color="#3F516C" />
									<ProductSize>
										<b>尺寸:</b> M
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="./assets/product/product1.jpg" />
								<Details>
									<ProductName>
										<b>產品:</b> 撥水加工有機棉舒適休閒鞋
									</ProductName>
									<ProductId>
										<b>ID:</b> 4550182667509
									</ProductId>
									<ProductColor color="#516574" />
									<ProductSize>
										<b>顏色:</b> 煙燻藍
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 20</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>訂單</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>小計</SummaryItemText>
							<SummaryItemPrice>$ 2300</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>運費</SummaryItemText>
							<SummaryItemPrice>$ 60</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>折扣金額</SummaryItemText>
							<SummaryItemPrice>$ -120</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>總計</SummaryItemText>
							<SummaryItemPrice>$ 2240</SummaryItemPrice>
						</SummaryItem>
						<Button>立即結帳</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Cart;
