const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FASchema = new Schema({
  name: String,
  date: {
    type: Date
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  }
});

mongoose.model('frame', FASchema);