const express = require('express');
const Router = express.Router();
const multer = require('multer')
const {addDoctor , getDoctor} = require('../Controller/Doctor')

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
//Router
Router.post('/addDoctors',upload.single('image'),addDoctor);
Router.get('/allDoctors',getDoctor);



module.exports = Router;