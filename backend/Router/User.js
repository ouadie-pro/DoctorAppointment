const express = require('express');
const Router = express.Router();
const {addUser , addUser1} = require('../Controller/User')

Router.post('/register',addUser);
Router.post('/signin',addUser1);

module.exports = Router;