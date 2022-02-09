const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//register
router.post('/register', async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,

		//加密
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_CRYPTO
		).toString(),
	});

	try {
		const saveUser = await newUser.save();
		res.status(200).json(saveUser);
	} catch (error) {
		res.status(500).json(error);
	}
});

//login
router.post('/login', async (req, res) => {
	try {
		const loginUser = await User.findOne({ username: req.body.username });

		//判斷使用者帳號存在
		!loginUser && res.status(400).json('不存在此使用者，或資料輸入錯誤');

		// 解密
		const DatabaseHashPassword = CryptoJS.AES.decrypt(
			loginUser.password,
			process.env.PASS_CRYPTO
		);

		const DatabasePassword = DatabaseHashPassword.toString(
			CryptoJS.enc.Utf8
		);

		// jwt
		const accessToken = jwt.sign(
			{
				id: loginUser._id,
				isAdmin: loginUser.isAdmin,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '3d' }
		);

		// 判斷密碼是否相符
		DatabasePassword !== req.body.password &&
			res.status(400).json('不存在此使用者，或資料輸入錯誤');

		// 除密碼資訊外傳送 (mongoDB資料放在_doc下)
		const { password, ...others } = loginUser._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
