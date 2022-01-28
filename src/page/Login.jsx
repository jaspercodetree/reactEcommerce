import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: url('./assets/registerBg.jpg') repeat-x center;
`;
const Wrapper = styled.div`
	background-color: #fff;
	width: 400px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 24px;
`;
const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 16px;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 75%;
`;
const Input = styled.input`
	margin: 8px;
	height: 32px;
	text-indent: 10px;
`;

const Button = styled.button`
	width: 40%;
	height: 48px;
	color: #fff;
	background-color: teal;
	margin: 16px 0;
	cursor: pointer;
`;
const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 24px;
	width: 75%;
`;

const Link = styled.a`
	font-size: 14px;
	color: teal;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>登入</Title>
				<Form>
					<Input placeholder="使用者姓名"></Input>
					<Input placeholder="密碼"></Input>
				</Form>
				<Button>確定</Button>
				<LinkContainer>
					<Link href="#">忘記密碼?</Link>
					<Link href="#">創建帳號</Link>
				</LinkContainer>
			</Wrapper>
		</Container>
	);
};

export default Login;
