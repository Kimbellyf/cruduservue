'use strict';

const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user-controller');
const authService = require('../services/auth-service');


//cadastro de novo usuário
router.post('/signup', usercontroller.createUser);
//login do usuário
router.post('/signIn', usercontroller.signIn);
router.post('/authenticate', usercontroller.authenticate);
router.post('/refresh-token', authService.authorize, usercontroller.refreshToken);
// get all users
router.get("/user", authService.authorize , authService.isAdmin, usercontroller.getUsers);
// gel specific user by id , ******
router.get("/user/:id", authService.authorize , authService.isAdmin, usercontroller.getUserById);
//update user
router.put('/user/:id', usercontroller.updateUser);
//delete user
router.delete('/user/', usercontroller.deleteUser);

// insert new user
router.post("/user", usercontroller.createUser);



module.exports = router;