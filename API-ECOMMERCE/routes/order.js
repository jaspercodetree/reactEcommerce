const router = require('express').Router();
const Order = require('../models/Order');
const { verifyTokenAdmin, verifyTokenAuthorize } = require('./verifyToken');

// Create
router.post('/', verifyTokenAuthorize, async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		const saveNewOrder = await newOrder.save();
		res.status(200).json(saveNewOrder);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update
router.put('/:id', verifyTokenAdmin, async (req, res) => {
	try {
		const updateOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateOrder);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json('您已成功刪除此筆商品');
	} catch (err) {
		res.status(500).json(err);
	}
});

// get one
router.get('/find/:userId', verifyTokenAdmin, async (req, res) => {
	try {
		const order = await Order.findById(req.params.userId);
		res.status(200).json(order);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get all 或條件搜尋(query)
router.get('/find', verifyTokenAdmin, async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let order;

		if (qNew) {
			order = await Order.find().sort({ createdAt: -1 }).limit(1);
		} else if (qCategory) {
			order = await Order.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			order = await Order.find();
		}

		res.status(200).json(order);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get 每月收入
router.get('/income', verifyTokenAdmin, async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	//兩個月前
	const previousMonth = new Date(
		new Date(date.setMonth(lastMonth.getMonth() - 1))
	);

	try {
		const income = await Order.aggregate([
			// 兩個月內的收入統計
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				// 取得資料表中$createdAt與$amount欄位，儲存在新設的兩個變數中
				$project: {
					setMonth: { $month: '$createdAt' },
					setSales: '$amount',
				},
			},
			{
				//依月份分類，統計各月份收入
				$group: {
					_id: '$setMonth',
					total: { $sum: '$setSales' },
				},
			},
		]);
		res.status(200).json(income);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
