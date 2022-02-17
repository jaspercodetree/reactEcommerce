import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data.js';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(-${(props) => props.sliderIndex * 100}vw);
	transition: all 1s ease;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0 96px;
	display: flex;
	flex-direction: column;
	align-items: center;
	letter-spacing: 8px;
`;

const Title = styled.h1`
	font-size: 4rem;
	margin-bottom: 1rem;
`;
const Desc = styled.p`
	margin-bottom: 2rem;
	max-width: 600px;
`;
const Button = styled.button`
	border: 0;
	padding: 12px 24px;
	border-radius: 8px;
	cursor: pointer;
`;

const ImageContainer = styled.div`
	width: 100vw;
	height: 100%;
	flex: 1;
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	height: 90%;
	width: 100%;
	border-radius: 32px;
	object-fit: cover;
`;

const Slider = () => {
	const [sliderIndex, setSliderIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			sliderIndex > 0
				? setSliderIndex(sliderIndex - 1)
				: setSliderIndex(2);
		} else {
			sliderIndex < 2
				? setSliderIndex(sliderIndex + 1)
				: setSliderIndex(0);
		}
	};

	// console.log(sliderIndex);

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowBackIosOutlined style={{ fontSize: '16px' }} />
			</Arrow>
			<Wrapper sliderIndex={sliderIndex}>
				{sliderItems.map((item) => {
					return (
						<Slide key={item.id} bg={item.bg}>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Desc>{item.desc}</Desc>
								<Button>立即前往</Button>
							</InfoContainer>
							<ImageContainer>
								<Image src={item.img} alt="slide-1" />
							</ImageContainer>
						</Slide>
					);
				})}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowForwardIosOutlined style={{ fontSize: '16px' }} />
			</Arrow>
		</Container>
	);
};

export default Slider;
