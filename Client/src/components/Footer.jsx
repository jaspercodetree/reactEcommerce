import {
	Facebook,
	Instagram,
	Mail,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	padding: 24px;
`;
const Left = styled.div`
	flex: 1;
	margin: 0 16px;
`;
const Logo = styled.h1`
	margin-bottom: 16px;
`;
const Desc = styled.p`
	margin-bottom: 16px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	color: #fff;
	background-color: #${(prop) => prop.bg};
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 8px;
`;
const Center = styled.div`
	flex: 1;
	margin: 0 16px;
`;
const Tittle = styled.h3`
	margin-bottom: 24px;
`;
const List = styled.ul`
	height: 150px;
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 8px;
`;

const Right = styled.div`
	flex: 1;
	margin: 0 16px;
`;

const ContactItem = styled.p`
	display: flex;
	margin-bottom: 16px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Jasper.</Logo>
				<Desc>
					定位為「快時尚」的Uniqlo，目前為全球知名服裝品牌之一，除了日本之外目前在全球十七個地區展開業務。
				</Desc>
				<SocialContainer>
					<SocialIcon bg="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon bg="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon bg="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon bg="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Tittle>關於Jasper.</Tittle>
				<List>
					<ListItem>優惠活動</ListItem>
					<ListItem>人才招募</ListItem>
					<ListItem>伙伴合作計畫</ListItem>
					<ListItem>社群意見領袖計劃</ListItem>
					<ListItem>成為賣家</ListItem>
					<ListItem>品牌推廣計劃</ListItem>
					<ListItem>條款及條件</ListItem>
					<ListItem>隱私聲明</ListItem>
					<ListItem>社群</ListItem>
				</List>
			</Center>
			<Right>
				<Tittle>聯絡我們</Tittle>
				<ContactItem>
					<Room style={{ marginRight: '8px' }} />
					114台北市內湖區
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '8px' }} />
					0912345678
				</ContactItem>
				<ContactItem>
					<Mail style={{ marginRight: '8px' }} />
					google@gmail.com.tw
				</ContactItem>
			</Right>
		</Container>
	);
};

export default Footer;
