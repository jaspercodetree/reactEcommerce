const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyTokenAdmin, verifyTokenAuthorize } = require('./verifyToken');

// Create
router.post('/', verifyTokenAuthorize, async (req, res) => {
	const newCart = new Cart(req.body);
	try {
		const saveNewCart = await newCart.save();
		res.status(200).json(saveNewCart);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update
router.put('/:id', verifyTokenAuthorize, async (req, res) => {
	try {
		const updateCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateCart);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete
router.delete('/:id', verifyTokenAuthorize, async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.status(200).json('您已成功刪除此筆商品');
	} catch (err) {
		res.status(500).json(err);
	}
});

// get one
router.get('/find/:userId', verifyTokenAuthorize, async (req, res) => {
	try {
		const cart = await Cart.findById(req.params.userId);
		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get all 或條件搜尋(query)
router.get('/find', verifyTokenAdmin, async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let cart;

		if (qNew) {
			cart = await Cart.find().sort({ createdAt: -1 }).limit(1);
		} else if (qCategory) {
			cart = await Cart.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			cart = await Cart.find();
		}

		res.status(200).json(cart);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
