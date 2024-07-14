const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	location: {
		type: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			state: { type: String, required: true },
			country: { type: String, required: true },
		},
		required: true,
	},
	total_price: { type: Number, required: true },
	images: [{ type: String, required: true }],
	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	token_name: { type: String, required: true, unique: true },
	no_of_tokens: { type: Number, required: true, default: 0 },
	investors: [
		{
			investor: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			share_per: { type: Number, required: true, default: 0 },
		},
	],
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
