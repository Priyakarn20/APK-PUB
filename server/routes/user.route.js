const express = require('express');
const {addUser,getUser,getUserById,deleteUser,updateUser} = require('../controller/user.controller');
const router = express.Router();

router.post('/addu', addUser);
router.get('/:id', getUserById);
router.get('/getu', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);


module.exports = router;