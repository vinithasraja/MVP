var mongoose = require('mongoose');
var crypto = require('crypto');

var ShortenSchema = new mongoose.Schema({
 
  name: {
  type:String,
  unique:true },

  email:String,
  phone:String,
  location:String,
  cusine:String

});

module.exports = mongoose.model('Shorten', ShortenSchema);
