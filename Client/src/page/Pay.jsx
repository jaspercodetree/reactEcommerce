import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import axios from 'axios';

// 公鑰
const PublicKey =
	'pk_test_51KRZybEJjCXNnxR5ij9PbaJhGJ7iugxEpchRjqCDBA3hRBBTs6JdFocistUinSlU45fx9Bnrl4cJYtH870RXc7jV00ZHmL21je';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	border: none;
	width: 120px;
	border-radius: 5px;
	padding: 20px;
	background-color: 'black';
	color: '#fff';
	font-weight: 600;
	cursor: pointer;
`;

const Pay = () => {
	const [stripeToken, setStripeToken] = useState(null);

	// 回傳token 資料
	const onToken = (token) => {
		setStripeToken(token);
		// console.log(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post(
					'http://localhost:5000/api/checkout/payment',
					{
						tokenId: stripeToken.id,
						amount: 2990000,
					}
				);
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken]);

	return (
		<Container>
			{/* react-stripe-checkout 設定資料*/}
			{stripeToken ? (
				<span>交易連線中，請稍等...</span>
			) : (
				<StripeCheckout
					name="Jasper Shop"
					description="購物付款"
					image="./assets/product/product2.jpg"
					billingAddress
					shippingAddress
					amount={299900}
					token={onToken}
					stripeKey={PublicKey}
				>
					<Button>付款</Button>
				</StripeCheckout>
			)}
		</Container>
	);
};

export default Pay;
