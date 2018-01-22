let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nuggetsoffreedom');

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

module.exports = mongoose.model('Nugs', nuggetSchema);
