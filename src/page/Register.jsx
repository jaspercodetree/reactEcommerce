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
	width: 50%;
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
	flex-wrap: wrap;
	justify-content: center;
`;
const Input = styled.input`
	margin: 8px;
	height: 32px;
	width: 40%;
	text-indent: 10px;
`;
const Policy = styled.p`
	font-size: 14px;
	margin: 16px 0;
	padding: 0 8%;
`;
const Button = styled.button`
	width: 40%;
	height: 48px;
	color: #fff;
	background-color: teal;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>註冊帳號</Title>
				<Form>
					<Input placeholder="名"></Input>
					<Input placeholder="姓"></Input>
					<Input placeholder="使用者名稱"></Input>
					<Input placeholder="email"></Input>
					<Input placeholder="密碼"></Input>
					<Input placeholder="確認密碼"></Input>
				</Form>
				<Policy>
					本隱私權政策（下稱「本政策」）說明本公司將蒐集的個人資料類別、我們將如何使用及分享個人資料，以及您如何管理您的個人資料。
				</Policy>
				<Button>確定</Button>
			</Wrapper>
		</Container>
	);
};

export default Register;
