const DiamSdk = require('diamante-sdk-js');
const axios = require('axios');
const User = require('../models/userModel');
const Property = require('../models/propertyModel');
const server = new DiamSdk.Horizon.Server('https://diamtestnet.diamcircle.io');

const listProperty = async (req, res) => {
  try {
    const {
      title,
      desc,
      total_price,
      images,
      location,
      token_name,
      no_of_tokens
    } = req.body;

    // Create a token asset using diamante API
    const newAssetResp = await axios.post('/api/user/create-asset', {
      token_name,
      no_of_tokens
    });

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

const fundAccountWithTestDiam = async (req, res) => {
  try {
    const publicKey = req.public_address;
    console.log(`Received request to fund account ${publicKey}`);
    const response = await axios.get(
      `${process.env.DIAM_FAUCET_URI}?addr=${publicKey}`
    );
    const result = response.data;
    console.log(`Account ${publicKey} activated`, result);
    res.json({ message: `Account ${publicKey} funded successfully` });
  } catch (error) {
    console.error('Error in fund-account:', error);
    res.status(500).json({ error: error.message });
  }
};

const setAccountDataOnChain = async (req, res) => {
  try {
    const { name, value } = req.body;
    const user = await User.findById(req.userId);
    const sourceKeys = DiamSdk.Keypair.fromSecret(user.secret_key);
    server
      .loadAccount(sourceKeys.publicKey())
      .then(function (sourceAccount) {
        transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
          fee: DiamSdk.BASE_FEE,
          networkPassphrase: 'Diamante Testnet'
        })
          .addOperation(
            DiamSdk.Operation.manageData({
              name,
              value
            })
          )
          .setTimeout(0)
          .build();
        // Signing the transaction
        transaction.sign(sourceKeys);
        return server.submitTransaction(transaction);
      })
      .then(function (result) {
        return res.status(200).json({ message: 'Data set successfully' });
      })
      .catch(function (error) {
        return res.status(500).json({ error: error.message });
      });
    return server.submitTransaction(transaction);
  } catch (error) {
    console.error('Error setting account data on chain:', error);
    return res.status(500).json({ error: error.message });
  }
};

const createTokenAssetOnChain = async (req, res) => {
  try {
    const { token_name, no_of_tokens } = req.body;
    const user = await User.findById(req.userId);
    const issuingKeys = DiamSdk.Keypair.fromSecret(user.secret_key);
    // Create a distributor account
    const distributorKeypair = DiamSdk.Keypair.random();
    user.distribution_address = distributorKeypair.publicKey();
    user.distribution_secret_key = distributorKeypair.secret();
    await user.save();
    const receivingKeys = DiamSdk.Keypair.fromSecret(
      distributorKeypair.secret()
    );
    // Create an asset (token) on diamante chain
    const newAsset = new DiamSdk.Asset(token_name, issuingKeys.publicKey());

    // Create trustline between distributor and issuer account
    server
      .loadAccount(receivingKeys.publicKey())
      .then(function (receiver) {
        let transaction = new DiamSdk.TransactionBuilder(receiver, {
          fee: 100,
          networkPassphrase: DiamSdk.Networks.TESTNET
        })
          .addOperation(
            DiamSdk.Operation.changeTrust({
              asset: newAsset,
              limit: no_of_tokens
            })
          )
          .setTimeout(100)
          .build();
        transaction.sign(receivingKeys);
        return server.submitTransaction(transaction);
      })
      .then(console.log)

      // Send the money (new asset tokens) to the distributor from issuer account
      .then(function () {
        return server.loadAccount(issuingKeys.publicKey());
      })
      .then(function (issuer) {
        let transaction = new DiamSdk.TransactionBuilder(issuer, {
          fee: 100,
          networkPassphrase: DiamSdk.Networks.TESTNET
        })
          .addOperation(
            DiamSdk.Operation.payment({
              destination: receivingKeys.publicKey(),
              asset: newAsset,
              amount: no_of_tokens
            })
          )
          .setTimeout(100)
          .build();
        transaction.sign(issuingKeys);
        return server.submitTransaction(transaction);
      })
      .then(console.log)
      .catch(function (error) {
        console.error(
          'Error occured while tranfering asset to distributor!',
          error
        );
      });

    return res
      .status(200)
      .json({ result: newAsset, message: 'Asset created successfully' });
  } catch (error) {
    console.error('Error creating token asset on chain:', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listProperty,
  getUserDetails,
  investInProperty,
  fundAccountWithTestDiam,
  setAccountDataOnChain,
  createTokenAssetOnChain
};
