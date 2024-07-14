const Property = require('../models/propertyModel');
const User = require('../models/userModel');

const listProperty = async (req, res) => {
  try {
    const { title, desc, total_price, images, location } = req.body;
    // Create a token asset using diamante API
    // get token name and no_of_tokens
    const token_name = 'Property Token';
    const no_of_tokens = 100;

    const owner = req.userId;
    // write logic to create property token using diamante API

    // Create a property
    const property = new Property({
      title,
      desc,
      location,
      total_price,
      images,
      owner,
      token_name,
      no_of_tokens
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

const getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.userId)
      .populate('my_investments.property')
      .populate('my_listings');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({
      result: user,
      message: 'User details fetched successfully'
    });
  } catch (error) {
    console.error('Error getting user details:', error);
    res.status(500).json({ error: error.message });
  }
};

const investInProperty = async (req, res) => {
  try {
    const { propId, share_per } = req.params;
    const property = await Property.findById(propId);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    // Do transaction on diam to buy asset token of property
    // on successfull transaction
    property.investors.push({ investor: req.userId, share_per });
    await property.save();
    const user = await User.findById(req.userId);
    user.my_investments.push({ property: propId, share_per });
    await user.save();

    res.status(200).json({
      result: property,
      message: 'Investment successful'
    });
  } catch (error) {
    console.error('Error investing in property:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { listProperty, getUserDetails, investInProperty };
