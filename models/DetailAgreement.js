const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DASchema = new Schema({
  number: String,
  client: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'service'
  }],
  time: Number,
  date: {
    type: Date
  }
});

mongoose.model('detail', DASchema);