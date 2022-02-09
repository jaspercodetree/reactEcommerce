const router = require('express').Router();
const User = require('../models/User');
const { verifyTokenAuthorize, verifyTokenAdmin } = require('./verifyToken');
const CryptoJS = require('crypto-js');

// 更新使用者資訊
router.put('/:id', verifyTokenAuthorize, async (req, res) => {
	// 如果更新資料包含密碼，先加密
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_CRYPTO
		).toString();
	}

	try {
		// 先引入User model 抓取資料
		const updateUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			// 設定new: true才會回傳更新後的新值
			{ new: true }
		);
		res.status(200).json(updateUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

// 刪除使用者
router.delete('/:id', verifyTokenAuthorize, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json('已成功刪除使用者');
	} catch (err) {
		res.status(500).json(err);
	}
});

// 查詢單一使用者
router.get('/find/:id', verifyTokenAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

//查詢所有使用者
router.get('/find', verifyTokenAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const user = query
			? await User.find().sort({ _id: -1 }).limit(2)
			: await User.find();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

//獲得使用者統計資料
router.get('/stats', verifyTokenAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

	try {
		const data = await User.aggregate([
			// 尋找大於前一年註冊的使用者
			{ $match: { createdAt: { $gte: lastYear } } },
			{
				$project: {
					// 設定新變數monthSet儲存， $month: '$createdAt'月份資料 (如果用$year則為取用年份資料)
					monthSet: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					// 用月份分組
					_id: '$monthSet',
					// 計算同個月份的總數(有的加一)
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
