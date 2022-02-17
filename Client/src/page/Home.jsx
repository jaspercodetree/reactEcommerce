import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Category from '../components/Category';
import Product from '../components/Product';
import NewsMessage from '../components/NewsMessage';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Category />
			<Product />
			<NewsMessage />
			<Footer />
		</div>
	);
};

export default Home;
