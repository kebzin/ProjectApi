const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser,  deleteOne ,updateOne} = require('../controllers/user');
const { createProperty, getAllProperty, getOneProperty, updateOneProperty  ,deleteOneProperty } = 
require('../controllers/properties');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);

// Sale route
router.post('/Property', createProperty);
router.get('/Property', getAllProperty);
router.get('/Property/:id', getOneProperty);
router.put('/Property/:id', updateOneProperty)
router.delete('/Property/:id', deleteOneProperty);

module.exports = router