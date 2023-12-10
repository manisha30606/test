var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");//database

const userschema = mongoose.Schema({//document
  username : String,
  name: String,
  age : Number,
});

// mongoose.model(naam,schema);//collection

mongoose.exports = mongoose.model("user" , userschema);

