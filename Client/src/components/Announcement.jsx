import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 30px;
	background-color: #faa;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
`;

const Announcement = () => {
	return (
		<Container>
			熱烈預購中! 暖心上市中! 未來潛力股! 熱烈預購中! 暖心上市中!
			未來潛力股!
		</Container>
	);
};

export default Announcement;
