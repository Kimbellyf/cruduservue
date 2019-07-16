'use strict';

const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user-controller');

//ta faltando o get
router.post('/', usercontroller.post);
router.put('/:id', usercontroller.put);
router.delete('/', usercontroller.delete);

module.exports = router;