const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const stripeRouter = require('./routes/stripe');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connect successfully'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/stripe', stripeRouter);

app.listen(process.env.PORT || 5000, () => {
	console.log('backend server is running.');
});
