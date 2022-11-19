const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser,  deleteOne ,updateOne} = require('../controllers/user');
const { createSale, getAllSale, getOneSale, updateOneSale  ,deleteOneSale } = 
require('../controllers/sale');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);

// Sale route
router.post('/sale', createSale);
router.get('/sale', getAllSale);
router.get('/sale/:id', getOneSale);
router.put('/sale/:id', updateOneSale)
router.delete('/sale/:id', deleteOneSale);

module.exports = router