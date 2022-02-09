const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.tokenxdxd;
	// console.log(req);

	if (authHeader) {
		const token = authHeader.split(' ')[1];
		jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
			if (err) res.status(400).json('Token 錯誤');
			// 將得到的資料庫data存在req.user中
			req.user = data;
			// console.log(req);
			next();
		});
	} else {
		res.status(400).json('未獲得授權');
	}
};

// id相符，或是admin
const verifyTokenAuthorize = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(400).json('未獲得授權');
		}
	});
};

// admin
const verifyTokenAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(400).json('未獲得授權');
		}
	});
};

module.exports = { verifyToken, verifyTokenAuthorize, verifyTokenAdmin };
