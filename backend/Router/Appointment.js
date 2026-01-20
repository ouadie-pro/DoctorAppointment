const express = require('express');
const Router = express.Router();
const {Addappointmant,getappointmant,DeleteAppointmant} = require('../Controller/Appointment')

Router.post('/createAppointment',Addappointmant),
Router.get('/myAppointment',getappointmant),
Router.delete('/deletAppointment',DeleteAppointmant),

module.exports = Router;