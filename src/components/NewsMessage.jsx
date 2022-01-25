import { Send } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 400px;
	background-color: #f8c6c6;
`;
const Title = styled.h1`
	margin-bottom: 20px;
`;
const Desc = styled.p`
	margin-bottom: 20px;
`;
const InputContainer = styled.div`
	background-color: #fff;
	width: 400px;
	display: flex;
`;
const Input = styled.input`
	flex: 8;
	border: 0;
	padding: 8px 16px;
	outline: none;
	border: 1px solid #eee;
`;
const Button = styled.button`
	flex: 1;
	background-color: teal;
	color: #fff;
	height: 100%;
	cursor: pointer;
`;

const NewsMessage = () => {
	return (
		<Container>
			<Title>歡迎訂閱</Title>
			<Desc>讓你第一時間掌握《Jasper》最新消息</Desc>
			<InputContainer>
				<Input placeholder="請輸入您的E-mail" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default NewsMessage;
