const Property = require('../models/propertyModel');

const listProperty = async (req, res) => {
	try {
		const { title, desc, total_price, images, location } = req.body;
		// Create a token asset using diamante API
		// get token name and no_of_tokens
		const token_name = 'Property Token';
		const no_of_tokens = 100;

		const owner = req.userId;
		// Create a property
		const property = new Property({
			title,
			desc,
			location,
			total_price,
			images,
			owner,
			token_name,
			no_of_tokens,
		});
		await property.save();

		res
			.status(200)
			.json({ result: property, message: 'Property listed successfully' });
	} catch (error) {
		console.error('Error listing new property:', error);
		res.status(500).json({ error: error.message });
	}
};

module.exports = { listProperty };