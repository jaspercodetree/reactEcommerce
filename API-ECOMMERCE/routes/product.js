const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAdmin } = require('./verifyToken');

// Create
router.post('/', verifyTokenAdmin, async (req, res) => {
	const newProduct = new Product(req.body);
	try {
		const saveNewProduct = await newProduct.save();
		res.status(200).json(saveNewProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update
router.put('/:id', verifyTokenAdmin, async (req, res) => {
	try {
		const updateProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete
router.delete('/:id', verifyTokenAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('您已成功刪除此筆商品');
	} catch (err) {
		res.status(500).json(err);
	}
});

// get one
router.get('/find/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get all 或條件搜尋(query)
router.get('/find', async (req, res) => {
	const qNew = req.query.new;
	const qCategory = req.query.category;
	try {
		let products;

		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(1);
		} else if (qCategory) {
			products = await Product.find({
				categories: {
					$in: [qCategory],
				},
			});
		} else {
			products = await Product.find();
		}

		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
