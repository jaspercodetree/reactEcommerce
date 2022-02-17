import Home from './page/Home';
import Register from './page/Register';
import Login from './page/Login';
import ProductList from './page/ProductList';
import ProductPage from './page/ProductPage';
import Cart from './page/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pay from './page/Pay';

const App = () => {
	return (
		// react-router-dom v6
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/productlist" element={<ProductList />} />
				<Route path="/productpage" element={<ProductPage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/pay" element={<Pay />} />
				{/* <Route path="/success" element={<Success />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
