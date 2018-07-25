var mongoose = require('mongoose');

var TrainerSchema = new mongoose.Schema({
  name: String,
  pokemon: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trainer', TrainerSchema);
