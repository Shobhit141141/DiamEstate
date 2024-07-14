const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	wallet_address: { type: String, required: true, unique: true },
	location: {
		type: {
      address: { type: String, required: true },
			city: { type: String, required: true },
			state: { type: String, required: true },
			country: { type: String, required: true },
		},
		required: true,
	},
	my_listings: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
	],
	my_transactions: [],
	my_investments: [
		{
			type: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
			share_per: { type: Number, required: true, default: 0 },
		},
	],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
