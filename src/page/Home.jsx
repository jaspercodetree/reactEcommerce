import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Category from '../components/Category';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Category />
		</div>
	);
};

export default Home;
