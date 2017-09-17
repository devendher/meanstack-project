var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cars = new Schema({
  name:  String,
  model: [{ name: String}],
});

module.exports=mongoose.model("cars",cars);
