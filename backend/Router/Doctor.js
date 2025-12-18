const express = require('express');
const Router = express.Router();
const {addDoctor} = require('../Controller/Doctor')

Router.post('/addDoctors',addDoctor);




module.exports = Router;