'use strict';

const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user-controller');
const authService = require('../services/auth-service');

//ta faltando o get e tbm ta faltando ajeitar esses posts
router.post('/signup', usercontroller.post);
router.post('/login', usercontroller.post);
router.post('/authenticate', usercontroller.authenticate);
router.post('/refresh-token', authService.authorize, usercontroller.refreshToken);
// get all users
router.get("/user", authService.authorize , authService.isAdmin, usercontroller.getUsers);
// gel one user
router.get("/user/:id", authService.authorize , authService.isAdmin, usercontroller.getUser);
router.put('/:id', usercontroller.put);
router.delete('/user/', usercontroller.delete);

module.exports = router;