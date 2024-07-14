const Property = require('../models/propertyModel');

const getAllProperty = async (req, res) => {
  try {
    const property = await Property.find();
    // show the latest property first
    property.sort((a, b) => b.created_at - a.created_at);
    res.status(200).json({
      result: property,
      message: 'All properties fetched successfully'
    });
  } catch (error) {
    console.error('Error getting all properties:', error);
    res.status(500).json({ error: error.message });
  }
};

const getSingleProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({
      result: property,
      message: 'Property fetched successfully'
    });
  } catch (error) {
    console.error('Error getting property:', error);
    res.status(500).json({ error: error.message });
  }
};

const searchProperty = async (req, res) => {
  try {
    const { q } = req.query;
    const property = await Property.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { 'location.address': { $regex: q, $options: 'i' } },
        { token_name: { $regex: q, $options: 'i' } }
      ]
    });
    return res.status(200).json({
      result: property,
      message: 'Search results fetched successfully'
    });
  } catch (error) {
    console.error('Error searching property:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProperty, getSingleProperty, searchProperty };
