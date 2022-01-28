const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connect successfully'))
	.catch((err) => console.log(err));

app.use(express.json());
// app.get('/api/test', () => console.log('test is success'));
app.use('/api/user', userRouter);

app.listen(process.env.PORT || 5000, () => {
	console.log('backend server is running.');
});
