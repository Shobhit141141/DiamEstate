const Property = require('../models/propertyModel');

const getAllProperty = async (req, res) => {
	try {
		const property = await Property.find();
    // show the latest property first
    property.sort((a, b) => b.created_at - a.created_at);
		res
			.status(200)
			.json({
				result: property,
				message: 'All properties fetched successfully',
			});
	} catch (error) {
		console.error('Error getting all properties:', error);
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getAllProperty };
