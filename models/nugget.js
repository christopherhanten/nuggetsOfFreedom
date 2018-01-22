let mongoose = require('mongoose');

//Nugget schema
let nuggetSchema = mongoose.Schema({
  date: {
    type     : Date,
    required : true
  },
  nugget: {
    type     : String,
    required : true
  }
});

let Nuggets = module.exports = mongoose.model('nuggets', nuggetSchema);
