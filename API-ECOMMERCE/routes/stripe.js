const router = require('express').Router();

// 透過密鑰連接stripe
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post('/payment', (req, res) => {
	stripe.charges.create(
		{
			// 請款資訊
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'TWD',
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json(stripeErr);
			} else {
				res.status(200).json(stripeRes);
			}
		}
	);
});

module.exports = router;
